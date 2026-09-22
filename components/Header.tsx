"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#danh-sach-doi", label: "Hướng Dẫn" },
  { href: "#giai-thuong", label: "Lịch Sử" },
  { href: "#bang-xep-hang", label: "BXH" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-bg-header flex items-center">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display font-black text-lg tracking-wide text-white">
            SUMMER<span className="text-blue-bright">CUP</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-5 py-6 text-sm font-bold uppercase text-white hover:text-red-bright transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-red-bright after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/login" className="hidden md:inline-flex btn-cyber px-8 py-2.5 text-sm">
          Đăng Nhập
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-header border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white font-bold uppercase text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/login"
            onClick={() => setOpen(false)}
            className="btn-cyber px-6 py-2.5 text-sm text-center"
          >
            Đăng Nhập
          </a>
        </div>
      )}
    </header>
  );
}
