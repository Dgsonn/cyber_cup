"use client";

import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { RewardItem } from "@/lib/types";

export default function RewardsAdmin() {
  const [rewards, setRewards] = useState<RewardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/rewards")
      .then((r) => r.json())
      .then((data) => setRewards(data.rewards ?? []))
      .finally(() => setLoading(false));
  }, []);

  function setLocalField(id: string, field: "cost" | "limit", value: number) {
    setRewards((list) => list.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  async function commitField(id: string, field: "cost" | "limit", value: number) {
    await fetch(`/api/rewards/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    });
  }

  async function removeReward(id: string) {
    setRewards((list) => list.filter((r) => r.id !== id));
    await fetch(`/api/rewards/${id}`, { method: "DELETE" });
  }

  async function addReward() {
    const res = await fetch("/api/rewards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Vật phẩm mới", cost: 5, image: "bag", limit: 1 }),
    });
    if (res.ok) {
      const data = await res.json();
      setRewards((list) => [...list, data.reward]);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-black text-white uppercase">Shop đổi quà</h1>
        <button onClick={addReward} className="btn-cyber-blue px-4 py-2 text-xs inline-flex items-center gap-1.5">
          <Plus size={14} /> Thêm quà
        </button>
      </div>

      <div className="rounded-lg overflow-hidden overflow-x-auto">
        <table className="table-ranking min-w-[560px]">
          <thead>
            <tr>
              <th className="w-[30%] col-left pl-4">Tên vật phẩm</th>
              <th className="w-[15%]">Điểm</th>
              <th className="w-[15%]">Giới hạn</th>
              <th className="w-[15%]">Đã đổi</th>
              <th className="w-[15%]">Còn lại</th>
              <th className="w-[10%]"></th>
            </tr>
          </thead>
          <tbody>
            {rewards.map((r) => (
              <tr key={r.id}>
                <td className="col-left pl-4">{r.name}</td>
                <td>
                  <input
                    type="number"
                    value={r.cost}
                    onChange={(e) => setLocalField(r.id, "cost", Number(e.target.value))}
                    onBlur={(e) => commitField(r.id, "cost", Number(e.target.value))}
                    className="w-16 bg-ink border border-blue rounded px-2 py-1 text-center text-champagne font-bold text-sm focus:outline-none"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={r.limit}
                    onChange={(e) => setLocalField(r.id, "limit", Number(e.target.value))}
                    onBlur={(e) => commitField(r.id, "limit", Number(e.target.value))}
                    className="w-16 bg-ink border border-blue rounded px-2 py-1 text-center text-white text-sm focus:outline-none"
                  />
                </td>
                <td>{r.claimed}</td>
                <td>{Math.max(r.limit - r.claimed, 0)}</td>
                <td>
                  <button
                    onClick={() => removeReward(r.id)}
                    className="text-red-bright hover:text-red"
                    aria-label={`Xóa ${r.name}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
            {!loading && rewards.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-white/40">
                  Chưa có vật phẩm nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
