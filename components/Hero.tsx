"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { TOURNAMENT } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-28 px-4"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-pitch-grid bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div
        className="absolute -right-24 top-16 w-[420px] h-[420px] rounded-full bg-mint/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-16 bottom-0 w-72 h-72 -rotate-12 bg-gradient-to-tr from-mint/10 to-transparent"
        style={{ clipPath: "polygon(0 0, 100% 20%, 80% 100%, 0% 80%)" }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="px-4 py-1 rounded-full border border-gold/50 text-gold text-xs sm:text-sm font-bold tracking-widest uppercase mb-6">
          Giải đấu thể thao điện tử · Hạng Vàng
        </span>

        <h1 className="font-display leading-none uppercase">
          <span className="block text-3xl sm:text-4xl text-white/90 tracking-widest">
            {TOURNAMENT.name}
          </span>
          <span className="block text-6xl sm:text-8xl md:text-9xl gold-gradient-text mt-1">
            2026
          </span>
        </h1>
        <span className="mt-3 text-xs sm:text-sm tracking-[0.3em] text-mint font-bold uppercase">
          FC Online Tournament
        </span>

        <p className="mt-6 max-w-xl text-white/70 text-sm sm:text-base">
          Nơi những huấn luyện viên xuất sắc nhất tranh tài. Tổng giải thưởng{" "}
          <span className="text-mint font-bold">{TOURNAMENT.totalPrize}</span>{" "}
          — vinh danh nhà vô địch mùa giải {new Date().getFullYear()}.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#dang-ky"
            className="group px-8 py-3 rounded-full bg-mint text-bg-deep font-bold hover:shadow-neon transition-shadow inline-flex items-center justify-center gap-2"
          >
            Đăng Ký Ngay
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#giai-dau"
            className="px-8 py-3 rounded-full border border-white/30 text-white font-bold hover:border-mint hover:text-mint transition-colors inline-flex items-center justify-center gap-2"
          >
            <Play size={14} /> Xem Giải Đấu
          </a>
        </div>
      </motion.div>
    </section>
  );
}
