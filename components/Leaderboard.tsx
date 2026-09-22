"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LEADERBOARD } from "@/lib/data";
import RewardShop from "./RewardShop";

export default function Leaderboard() {
  const [tab, setTab] = useState<"shop" | "history">("shop");
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <section id="bang-xep-hang" className="py-20 px-4 bg-bg-deep/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="title-page text-3xl sm:text-4xl mb-2">
          <span className="tag text-6xl sm:text-7xl">Rankings</span>
          Bảng xếp hạng tổng
        </h2>
        <p className="text-center text-white/60 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
          Các giải đấu sẽ được cập nhật vào thứ 3 hằng tuần. Hãy xem chi tiết và đăng ký
          giải đấu phù hợp. Vô vàn phần quà hấp dẫn đang chờ đợi bạn!
        </p>

        <div className="flex justify-center gap-4 my-8">
          <button
            onClick={() => {
              setTab("shop");
              setShopOpen(true);
            }}
            className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase transition-colors ${
              tab === "shop" ? "bg-blue-btn text-white" : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            Shop đổi quà
          </button>
          <button
            onClick={() => setTab("history")}
            className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase transition-colors ${
              tab === "history" ? "bg-blue-btn text-white" : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            Lịch sử đổi quà
          </button>
        </div>

        {tab === "history" && (
          <div className="text-center text-white/50 text-sm py-6">
            Bạn chưa đổi phần quà nào.
          </div>
        )}

        <div className="rounded-lg overflow-hidden overflow-x-auto">
          <table className="table-ranking min-w-[520px]">
            <thead>
              <tr>
                <th className="w-[10%]">Hạng</th>
                <th className="w-[30%] col-left pl-4">Tên HLV</th>
                <th className="w-[15%]">🥇</th>
                <th className="w-[15%]">🥈</th>
                <th className="w-[15%]">🥉</th>
                <th className="w-[15%]">Tổng điểm</th>
              </tr>
            </thead>
            <tbody>
              {LEADERBOARD.map((entry, i) => (
                <motion.tr
                  key={entry.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <td>{entry.rank}</td>
                  <td className="col-left pl-4">{entry.name}</td>
                  <td>{entry.medals.gold}</td>
                  <td>{entry.medals.silver}</td>
                  <td>{entry.medals.bronze}</td>
                  <td className="text-champagne font-bold">{entry.points}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <RewardShop open={shopOpen} onClose={() => setShopOpen(false)} />
    </section>
  );
}
