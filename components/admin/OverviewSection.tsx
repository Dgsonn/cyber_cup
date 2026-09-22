"use client";

import { Users, Trophy, Gift, ClipboardList } from "lucide-react";
import { TEAMS, LEADERBOARD, REWARDS, REGISTRATIONS } from "@/lib/data";

export default function OverviewSection() {
  const totalMembers = TEAMS.reduce((sum, t) => sum + t.members, 0);
  const totalClaimed = REWARDS.reduce((sum, r) => sum + r.claimed, 0);
  const pendingCount = REGISTRATIONS.filter((r) => r.status === "pending").length;

  const stats = [
    { label: "Tổng số đội", value: TEAMS.length, icon: <Users size={20} />, color: "blue" as const },
    { label: "Tổng tuyển thủ", value: totalMembers, icon: <Trophy size={20} />, color: "red" as const },
    { label: "Lượt đổi quà", value: totalClaimed, icon: <Gift size={20} />, color: "champagne" as const },
    { label: "Đơn chờ duyệt", value: pendingCount, icon: <ClipboardList size={20} />, color: "blue" as const },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue/10 border-blue/40 text-blue-bright",
    red: "bg-red/10 border-red/40 text-red-bright",
    champagne: "bg-champagne/10 border-champagne/40 text-champagne",
  };

  return (
    <div>
      <h1 className="text-xl font-black text-white uppercase mb-6">Tổng quan</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg bg-bg-panel border border-white/10 p-4 flex items-center gap-3"
          >
            <div className={`w-11 h-11 rounded-full border flex items-center justify-center shrink-0 ${colorClasses[s.color]}`}>
              {s.icon}
            </div>
            <div>
              <div className="text-2xl font-display font-black text-white leading-none">{s.value}</div>
              <div className="text-xs text-white/50 mt-1">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg bg-bg-panel border border-white/10 p-5">
          <h2 className="text-sm font-bold text-white uppercase mb-4">Báo danh gần đây</h2>
          <div className="flex flex-col gap-3">
            {REGISTRATIONS.slice(0, 5).map((r) => (
              <div key={r.id} className="flex items-center justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <div>
                  <div className="font-bold text-white">{r.name}</div>
                  <div className="text-xs text-white/40">{r.coach} · {r.submittedAt}</div>
                </div>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-bg-panel border border-white/10 p-5">
          <h2 className="text-sm font-bold text-white uppercase mb-4">Top bảng xếp hạng</h2>
          <div className="flex flex-col gap-3">
            {LEADERBOARD.slice(0, 5).map((entry) => (
              <div key={entry.name} className="flex items-center justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <div className="flex items-center gap-2">
                  <span className="font-display text-champagne w-5">{entry.rank}</span>
                  <span className="font-bold text-white">{entry.name}</span>
                </div>
                <span className="text-champagne font-bold">{entry.points} đ</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: "pending" | "approved" | "rejected" }) {
  const map = {
    pending: { label: "Chờ duyệt", className: "bg-blue/15 text-blue-bright" },
    approved: { label: "Đã duyệt", className: "bg-success/15 text-success" },
    rejected: { label: "Từ chối", className: "bg-red/15 text-red-bright" },
  } as const;
  const { label, className } = map[status];
  return (
    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${className}`}>
      {label}
    </span>
  );
}
