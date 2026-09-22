"use client";

import { motion } from "framer-motion";
import { TOURNAMENT } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[38vw] min-h-[420px] max-h-[640px] flex items-center justify-center overflow-hidden pt-[68px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-deep via-bg to-bg" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-pitch-grid bg-[size:36px_36px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <span className="text-xs sm:text-sm tracking-[0.3em] text-white/60 font-bold uppercase mb-3">
          Giải đấu thể thao điện tử
        </span>

        <h1 className="title-page text-4xl sm:text-6xl md:text-7xl">
          <span className="tag text-6xl sm:text-8xl md:text-9xl">{TOURNAMENT.name}</span>
          {TOURNAMENT.name} {TOURNAMENT.season}
        </h1>

        <p className="mt-4 max-w-md text-white/70 text-sm sm:text-base">
          Tổng giải thưởng <span className="text-champagne font-bold">{TOURNAMENT.totalPrize}</span>{" "}
          đang chờ đợi những huấn luyện viên xuất sắc nhất.
        </p>

        <a href="#dang-ky" className="btn-cyber mt-8 px-10 py-3 text-sm sm:text-base">
          Báo Danh Thi Đấu
        </a>
      </motion.div>
    </section>
  );
}
