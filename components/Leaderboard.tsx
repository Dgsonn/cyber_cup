"use client";

import { motion } from "framer-motion";
import { Medal } from "lucide-react";
import { LEADERBOARD } from "@/lib/data";

const RANK_COLORS: Record<number, string> = {
  1: "#ffdd1b",
  2: "#c7c7c7",
  3: "#f3b65d",
};

export default function Leaderboard() {
  return (
    <section id="bxh" className="py-24 px-4 bg-bg-deep/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          Bảng xếp hạng <span className="text-mint">huấn luyện viên</span>
        </h2>
        <p className="text-center text-white/60 mt-3 text-sm">
          Top huấn luyện viên tích lũy điểm cao nhất mùa giải, đổi điểm lấy quà ngay bên dưới.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-[3rem_1fr_5rem_7rem] sm:grid-cols-[4rem_1fr_8rem_8rem] bg-white/5 px-4 py-3 text-xs uppercase text-white/50 font-bold">
            <span>Hạng</span>
            <span>Người chơi</span>
            <span className="hidden sm:block text-center">Huy chương</span>
            <span className="text-right">Điểm</span>
          </div>

          {LEADERBOARD.map((entry, i) => (
            <motion.div
              key={entry.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`grid grid-cols-[3rem_1fr_5rem_7rem] sm:grid-cols-[4rem_1fr_8rem_8rem] items-center px-4 py-3 text-sm ${
                i % 2 ? "bg-white/[0.02]" : ""
              } ${entry.rank <= 3 ? "border-l-2" : ""}`}
              style={{ borderColor: RANK_COLORS[entry.rank] }}
            >
              <span
                className="font-display text-base"
                style={{ color: RANK_COLORS[entry.rank] ?? "#fff" }}
              >
                #{entry.rank}
              </span>
              <div className="min-w-0">
                <div className="font-bold truncate">{entry.name}</div>
                <div className="text-xs text-white/40 truncate">{entry.team}</div>
              </div>
              <div className="hidden sm:flex items-center justify-center gap-2 text-xs text-white/60">
                <span className="flex items-center gap-0.5">
                  <Medal size={12} className="text-gold" /> {entry.medals.gold}
                </span>
                <span className="flex items-center gap-0.5">
                  <Medal size={12} className="text-white/50" /> {entry.medals.silver}
                </span>
                <span className="flex items-center gap-0.5">
                  <Medal size={12} className="text-gold-soft" /> {entry.medals.bronze}
                </span>
              </div>
              <span className="text-right font-display text-mint">{entry.points} đ</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
