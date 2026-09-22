"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Newspaper } from "lucide-react";
import { NEWS } from "@/lib/data";

export default function NewsSection() {
  return (
    <section id="tin-tuc" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-2xl sm:text-3xl uppercase flex items-center gap-3">
            <span className="w-1.5 h-6 bg-mint rounded-full" />
            Tin tức <span className="text-mint">mới nhất</span>
          </h2>
          <a href="#tin-tuc" className="hidden sm:flex items-center gap-1 text-sm text-white/60 hover:text-mint transition-colors">
            Xem tất cả <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {NEWS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-bg-panel flex flex-col"
            >
              <div className="h-36 bg-hero-glow bg-bg-deep flex items-center justify-center border-b border-white/10">
                <Newspaper size={32} className="text-mint/50" />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-white/40 uppercase font-bold">
                  <CalendarDays size={12} />
                  {item.date} · {item.tag}
                </span>
                <h3 className="font-display text-sm leading-snug">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed flex-1">{item.excerpt}</p>
                <a href="#tin-tuc" className="text-mint text-xs font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Đọc thêm <ArrowRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
