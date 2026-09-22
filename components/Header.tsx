"use client";

import { useEffect, useState } from "react";
import { Menu, X, Trophy, Search } from "lucide-react";

const NAV_LINKS = [
  { href: "#top", label: "Trang chủ" },
  { href: "#giai-dau", label: "Giải đấu" },
  { href: "#lich-thi-dau", label: "Lịch thi đấu" },
  { href: "#bxh", label: "BXH" },
  { href: "#doi-thi-dau", label: "Đội tuyển" },
  { href: "#tin-tuc", label: "Tin tức" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg-deep/90 backdrop-blur-md shadow-neon" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-full bg-mint/10 border border-mint flex items-center justify-center">
            <Trophy size={18} className="text-mint" />
          </div>
          <span className="font-display text-sm sm:text-base tracking-wide text-mint">
            SUMMER CUP
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/80 hover:text-mint transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            aria-label="Tìm kiếm"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-mint hover:border-mint transition-colors"
          >
            <Search size={16} />
          </button>
          <a
            href="#dang-ky"
            className="px-5 py-2 rounded-full bg-mint text-bg-deep font-bold text-sm hover:shadow-neon transition-shadow"
          >
            Đăng Ký Thi Đấu
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-bg-deep/95 border-t border-mint/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 font-semibold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#dang-ky"
            onClick={() => setOpen(false)}
            className="px-5 py-2 rounded-full bg-mint text-bg-deep font-bold text-sm text-center"
          >
            Đăng Ký Thi Đấu
          </a>
        </div>
      )}
    </header>
  );
}
