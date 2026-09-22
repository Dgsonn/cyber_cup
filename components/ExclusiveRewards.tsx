"use client";

import { motion } from "framer-motion";
import { Shirt, Mouse, HardHat } from "lucide-react";
import { EXCLUSIVE_REWARDS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  jersey: <Shirt size={64} />,
  mouse: <Mouse size={64} />,
  cap: <HardHat size={64} />,
};

export default function ExclusiveRewards() {
  return (
    <section id="giai-thuong" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="title-page text-3xl sm:text-4xl mb-2">
          <span className="tag text-6xl sm:text-7xl">Rewards</span>
          Giải thưởng độc quyền
        </h2>
        <p className="text-center text-white/60 text-sm mt-4 max-w-lg mx-auto">
          Các vật phẩm độc quyền chỉ dành riêng cho các HLV tích cực hoạt động tại sự
          kiện Summer Cup.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          {EXCLUSIVE_REWARDS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="w-full sm:w-64 text-center"
            >
              <div className="relative rounded-lg bg-gradient-to-b from-blue/15 to-transparent border border-blue/25 aspect-square flex items-center justify-center text-blue-bright mb-3">
                {ICONS[item.image]}
                <span className="absolute top-2 right-2 text-sm font-black text-white">
                  {item.number}
                </span>
                {item.isNew && (
                  <span className="absolute top-2 left-2 bg-champagne text-ink text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                    New
                  </span>
                )}
              </div>
              <h3 className="text-sm font-bold uppercase relative pl-3 text-left before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-4 before:bg-white">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
