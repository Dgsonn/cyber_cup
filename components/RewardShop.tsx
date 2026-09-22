"use client";

import { useState } from "react";
import {
  Shirt,
  Keyboard,
  Mouse,
  Backpack,
} from "lucide-react";
import { REWARDS, USER_POINTS } from "@/lib/data";
import Modal from "./Modal";

const ICONS: Record<string, React.ReactNode> = {
  jersey: <Shirt size={28} />,
  keyboard: <Keyboard size={28} />,
  mouse: <Mouse size={28} />,
  bag: <Backpack size={28} />,
};

export default function RewardShop({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [points, setPoints] = useState(USER_POINTS);
  const [claimed, setClaimed] = useState<Record<string, number>>({});

  function redeem(id: string, cost: number, limit: number) {
    const current = claimed[id] ?? 0;
    if (points < cost || current >= limit) return;
    setPoints((p) => p - cost);
    setClaimed((c) => ({ ...c, [id]: current + 1 }));
  }

  return (
    <Modal open={open} onClose={onClose} labelledBy="shop-title">
      <h2
        id="shop-title"
        className="text-champagne uppercase text-xl font-black border-b-2 border-champagne pb-3 mb-4 shadow-champagne"
      >
        Shop đổi quà
      </h2>

      <p className="text-sm text-white/80 text-center mb-1 leading-relaxed">
        Tích lũy điểm bằng cách đăng ký tham gia các giải đấu. Khi đạt thứ hạng cao cũng
        sẽ mang lại cho bạn một điểm số nhất định. Hãy cố gắng thu thập nhiều điểm và đổi
        các phần quà bên dưới ngay nhé!
        <br />
        Lưu ý: Điểm tích lũy và quà sẽ được thay đổi theo từng tháng.
      </p>
      <p className="text-champagne font-bold text-center mt-2 mb-5">
        Điểm hiện có: {points}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {REWARDS.map((item) => {
          const count = claimed[item.id] ?? 0;
          const maxedOut = count >= item.limit;
          const canAfford = points >= item.cost;
          return (
            <div
              key={item.id}
              className="rounded-md border border-champagne/15 bg-champagne/5 p-3 flex flex-col items-center gap-2 hover:border-champagne/50 hover:bg-champagne/10 transition-colors"
            >
              <div className="relative w-full aspect-square flex items-center justify-center text-champagne">
                {ICONS[item.image]}
                <span className="absolute -top-1 -right-1 bg-champagne text-ink text-[10px] font-bold px-1.5 py-0.5 rounded">
                  {count}/{item.limit}
                </span>
              </div>
              <button
                onClick={() => redeem(item.id, item.cost, item.limit)}
                disabled={maxedOut || !canAfford}
                className={`w-full text-xs font-bold uppercase py-1.5 rounded transition-colors ${
                  maxedOut || !canAfford
                    ? "bg-white/10 text-white/30 cursor-not-allowed"
                    : "bg-champagne-btn text-ink hover:brightness-110"
                }`}
              >
                {maxedOut ? "Đã đổi" : `${item.cost} điểm`}
              </button>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-6">
        <button onClick={onClose} className="btn-cyber px-10 py-2.5 text-sm">
          Xác nhận
        </button>
      </div>
    </Modal>
  );
}
