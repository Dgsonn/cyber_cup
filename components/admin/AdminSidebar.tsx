"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Gift,
  ClipboardList,
  ArrowLeft,
  LogOut,
} from "lucide-react";

export type AdminSection = "overview" | "teams" | "leaderboard" | "rewards" | "registrations";

const NAV_ITEMS: { id: AdminSection; label: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "Tổng quan", icon: <LayoutDashboard size={18} /> },
  { id: "teams", label: "Đội thi đấu", icon: <Users size={18} /> },
  { id: "leaderboard", label: "Bảng xếp hạng", icon: <Trophy size={18} /> },
  { id: "rewards", label: "Đổi quà", icon: <Gift size={18} /> },
  { id: "registrations", label: "Báo danh", icon: <ClipboardList size={18} /> },
];

export default function AdminSidebar({
  active,
  onChange,
}: {
  active: AdminSection;
  onChange: (section: AdminSection) => void;
}) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <aside className="w-60 shrink-0 bg-bg-header min-h-screen flex flex-col">
      <div className="h-[68px] flex items-center px-6 border-b border-white/10">
        <span className="font-display font-black text-lg text-white">
          SUMMER<span className="text-blue-bright">CUP</span>
        </span>
      </div>

      <nav className="flex-1 py-4 flex flex-col gap-1 px-3">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-bold transition-colors ${
                isActive
                  ? "bg-red/15 text-red-bright border-l-4 border-red-bright pl-3"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-white/10 flex flex-col gap-1">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-bold text-white/60 hover:text-blue-bright hover:bg-white/5 transition-colors"
        >
          <ArrowLeft size={16} />
          Về trang chủ
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-bold text-white/60 hover:text-red-bright hover:bg-white/5 transition-colors"
        >
          <LogOut size={16} />
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
