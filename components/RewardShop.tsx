"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shirt,
  Keyboard,
  Mouse,
  Backpack,
  CupSoda,
  Image as ImageIcon,
  KeyRound,
  Sticker,
  Coins,
} from "lucide-react";
import { REWARDS, USER_POINTS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  jersey: <Shirt size={28} />,
  keyboard: <Keyboard size={28} />,
  mouse: <Mouse size={28} />,
  bag: <Backpack size={28} />,
  bottle: <CupSoda size={28} />,
  poster: <ImageIcon size={28} />,
  keychain: <KeyRound size={28} />,
  sticker: <Sticker size={28} />,
};

export default function RewardShop() {
  const [points, setPoints] = useState(USER_POINTS);
  const [redeemed, setRedeemed] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  function redeem(id: string, cost: number, name: string) {
    if (points < cost || redeemed.includes(id)) return;
    setPoints((p) => p - cost);
    setRedeemed((r) => [...r, id]);
    setToast(`Đã đổi thành công: ${name}`);
    setTimeout(() => setToast(null), 2500);
  }

  return (
    <section id="doi-qua" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-left font-display text-3xl sm:text-4xl uppercase">
              Shop <span className="text-mint">đổi quà</span>
            </h2>
            <p className="text-white/60 mt-2 text-sm">
              Dùng điểm tích lũy để đổi quà lưu niệm chính thức từ giải đấu.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-bg-panel border border-gold/40 px-5 py-2 self-start sm:self-auto">
            <Coins size={18} className="text-gold" />
            <span className="font-display text-gold">{points}</span>
            <span className="text-xs text-white/50 uppercase">điểm</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {REWARDS.map((item, i) => {
            const isRedeemed = redeemed.includes(item.id);
            const canAfford = points >= item.cost;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="rounded-2xl bg-bg-panel border border-white/10 p-4 flex flex-col items-center text-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-mint/10 text-mint flex items-center justify-center">
                  {ICONS[item.image]}
                </div>
                <h3 className="text-sm font-bold leading-snug min-h-[2.5rem]">{item.name}</h3>
                <span className="text-xs text-white/40">Còn {item.stock} phần</span>
                <div className="flex items-center gap-1 text-gold font-display text-sm">
                  <Coins size={14} /> {item.cost}
                </div>
                <button
                  onClick={() => redeem(item.id, item.cost, item.name)}
                  disabled={isRedeemed || !canAfford}
                  className={`w-full py-2 rounded-full text-xs font-bold transition-colors ${
                    isRedeemed
                      ? "bg-white/10 text-white/40 cursor-not-allowed"
                      : canAfford
                      ? "bg-mint text-bg-deep hover:shadow-neon"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  {isRedeemed ? "Đã đổi" : canAfford ? "Đổi ngay" : "Không đủ điểm"}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] bg-mint text-bg-deep font-bold text-sm px-5 py-3 rounded-full shadow-neon">
          {toast}
        </div>
      )}
    </section>
  );
}
