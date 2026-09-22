"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MATCHES, STANDINGS, TEAMS } from "@/lib/data";
import { MatchStage } from "@/lib/types";

const TABS: (MatchStage | "Tất cả")[] = ["Tất cả", "Vòng bảng", "Playoff", "Chung kết"];

function teamColor(name: string) {
  return TEAMS.find((t) => t.name === name)?.color ?? "#66e28e";
}

function teamShort(name: string) {
  return TEAMS.find((t) => t.name === name)?.shortName ?? name.slice(0, 3).toUpperCase();
}

function ScheduleBlock() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Tất cả");

  const matches = useMemo(
    () => (tab === "Tất cả" ? MATCHES : MATCHES.filter((m) => m.stage === tab)),
    [tab]
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-xl sm:text-2xl uppercase flex items-center gap-3">
          <span className="w-1.5 h-5 bg-mint rounded-full" />
          Lịch thi đấu
        </h2>
        <a href="#doi-thi-dau" className="hidden sm:flex items-center gap-1 text-xs text-white/60 hover:text-mint transition-colors">
          Xem tất cả <ArrowRight size={12} />
        </a>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              tab === t ? "bg-mint text-bg-deep" : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden">
        {matches.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex items-center gap-3 px-4 py-3 text-sm"
          >
            <div className="w-16 shrink-0 text-xs text-white/50">
              <div>{m.date}</div>
              <div className="font-bold text-white/70">{m.time}</div>
            </div>

            <div className="flex-1 flex items-center justify-center gap-3 min-w-0">
              <TeamPill name={m.teamA} />
              <span className="text-white/30 text-xs font-bold shrink-0">VS</span>
              <TeamPill name={m.teamB} align="left" />
            </div>

            <div className="hidden sm:flex flex-col items-end gap-1 w-24 shrink-0">
              <span className="text-[10px] text-white/40 uppercase">{m.stage}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  m.played ? "bg-white/10 text-white/50" : "bg-gold/15 text-gold"
                }`}
              >
                {m.played ? "Đã đấu" : "Sắp diễn ra"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TeamPill({ name, align = "right" }: { name: string; align?: "left" | "right" }) {
  const color = teamColor(name);
  return (
    <div className={`flex items-center gap-2 min-w-0 ${align === "right" ? "flex-row-reverse text-right" : "text-left"}`}>
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
        style={{ backgroundColor: `${color}22`, color, border: `1px solid ${color}` }}
      >
        {teamShort(name)}
      </div>
      <span className="text-xs sm:text-sm truncate">{name}</span>
    </div>
  );
}

function StandingsBlock() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-xl sm:text-2xl uppercase flex items-center gap-3">
          <span className="w-1.5 h-5 bg-gold rounded-full" />
          Bảng xếp hạng
        </h2>
        <a href="#bxh" className="hidden sm:flex items-center gap-1 text-xs text-white/60 hover:text-mint transition-colors">
          Xem tất cả <ArrowRight size={12} />
        </a>
      </div>

      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-[2rem_1fr_2rem_2rem_2rem_2rem_3rem] items-center bg-white/5 px-4 py-2.5 text-[11px] uppercase text-white/50 font-bold">
          <span>#</span>
          <span>Đội tuyển</span>
          <span className="text-center">Trận</span>
          <span className="text-center hidden sm:block">Thắng</span>
          <span className="text-center hidden sm:block">Hòa</span>
          <span className="text-center hidden sm:block">Thua</span>
          <span className="text-right">Điểm</span>
        </div>

        {STANDINGS.map((row, i) => (
          <motion.div
            key={row.team}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className={`grid grid-cols-[2rem_1fr_2rem_2rem_2rem_2rem_3rem] items-center px-4 py-3 text-sm ${
              i % 2 ? "bg-white/[0.02]" : ""
            }`}
          >
            <span className="font-display text-sm text-white/60">{i + 1}</span>
            <div className="flex items-center gap-2 min-w-0">
              <div
                className="w-5 h-5 rounded-full shrink-0"
                style={{ backgroundColor: row.color }}
              />
              <span className="font-bold truncate">{row.team}</span>
            </div>
            <span className="text-center text-white/60">{row.played}</span>
            <span className="text-center text-white/60 hidden sm:block">{row.win}</span>
            <span className="text-center text-white/60 hidden sm:block">{row.draw}</span>
            <span className="text-center text-white/60 hidden sm:block">{row.lose}</span>
            <span className="text-right font-display text-mint">{row.points}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ScheduleStandings() {
  return (
    <section id="lich-thi-dau" className="py-24 px-4 bg-bg-deep/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScheduleBlock />
        <StandingsBlock />
      </div>
    </section>
  );
}
