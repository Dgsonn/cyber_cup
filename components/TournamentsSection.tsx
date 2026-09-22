"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Gamepad2, Trophy, ChevronRight } from "lucide-react";
import { TOURNAMENTS, TOURNAMENT } from "@/lib/data";
import { TournamentStatus } from "@/lib/types";
import CountdownTimer from "./CountdownTimer";

const STATUS_STYLE: Record<TournamentStatus, { label: string; className: string }> = {
  live: { label: "Đang diễn ra", className: "bg-mint text-bg-deep" },
  open: { label: "Đang đăng ký", className: "bg-cyan/90 text-bg-deep" },
  upcoming: { label: "Sắp diễn ra", className: "bg-white/10 text-white border border-white/20" },
};

export default function TournamentsSection() {
  const [featured, ...rest] = TOURNAMENTS;

  return (
    <section id="giai-dau" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-2xl sm:text-3xl uppercase flex items-center gap-3">
            <span className="w-1.5 h-6 bg-mint rounded-full" />
            Giải đấu <span className="text-mint">đang diễn ra</span>
          </h2>
          <a href="#lich-thi-dau" className="hidden sm:flex items-center gap-1 text-sm text-white/60 hover:text-mint transition-colors">
            Xem tất cả <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-mint/30 bg-bg-panel p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-hero-glow opacity-70" aria-hidden />
            <div className="relative z-10">
              <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase ${STATUS_STYLE[featured.status].className}`}>
                {STATUS_STYLE[featured.status].label}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl mt-4 uppercase">{featured.name}</h3>
              <span className="text-xs tracking-[0.25em] text-mint font-bold uppercase">
                {featured.tag}
              </span>

              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6 text-sm">
                <div className="flex items-center gap-2 text-white/70">
                  <CalendarDays size={16} className="text-mint" />
                  <div>
                    <div className="text-[10px] uppercase text-white/40">Thời gian</div>
                    <div className="font-bold">{featured.dateRange}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Gamepad2 size={16} className="text-mint" />
                  <div>
                    <div className="text-[10px] uppercase text-white/40">Hình thức</div>
                    <div className="font-bold">{featured.format}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <CountdownTimer target={TOURNAMENT.eventDateISO} />
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-gold" />
                <div>
                  <div className="text-[10px] uppercase text-white/40">Tổng giải thưởng</div>
                  <div className="font-display text-gold text-xl">{featured.totalPrize}</div>
                </div>
              </div>
              <a
                href="#doi-thi-dau"
                className="px-6 py-2.5 rounded-full bg-mint text-bg-deep font-bold text-sm text-center hover:shadow-neon transition-shadow"
              >
                Xem chi tiết
              </a>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {rest.map((t, i) => (
              <motion.a
                key={t.id}
                href="#lich-thi-dau"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-bg-panel p-4 hover:border-mint/40 transition-colors"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${t.color}22`, border: `1px solid ${t.color}` }}
                >
                  <Trophy size={20} style={{ color: t.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase mb-1 ${STATUS_STYLE[t.status].className}`}>
                    {STATUS_STYLE[t.status].label}
                  </span>
                  <div className="font-display text-sm truncate">{t.name}</div>
                  <div className="text-xs text-white/50 truncate">{t.tag}</div>
                  <div className="text-[11px] text-white/40 mt-1">{t.dateRange} · {t.format}</div>
                </div>
                <ChevronRight size={18} className="text-white/30 shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
