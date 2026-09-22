"use client";

import { motion } from "framer-motion";
import { Users, UserRound, Trophy } from "lucide-react";
import { STATS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  teams: <Users size={22} />,
  players: <UserRound size={22} />,
  prize: <Trophy size={22} />,
};

export default function AboutStats() {
  return (
    <section className="relative -mt-14 sm:-mt-16 z-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-2xl bg-bg-panel/95 backdrop-blur border border-mint/20 shadow-neon px-6 sm:px-10 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4 py-4 sm:py-0 sm:px-6 first:pt-0 sm:first:pl-0">
            <div className="w-12 h-12 rounded-full bg-mint/10 border border-mint/40 text-mint flex items-center justify-center shrink-0">
              {ICONS[stat.icon]}
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl text-gold leading-none">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mt-1.5">{stat.label}</div>
              <div className="text-xs text-white/50">{stat.sublabel}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
