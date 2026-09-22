"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { LeaderboardRow } from "@/lib/types";

export default function LeaderboardAdmin() {
  const [entries, setEntries] = useState<LeaderboardRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((r) => r.json())
      .then((data) => setEntries(data.entries ?? []))
      .finally(() => setLoading(false));
  }, []);

  function setLocalPoints(id: string, points: number) {
    setEntries((list) => list.map((e) => (e.id === id ? { ...e, points } : e)));
  }

  async function commitPoints(id: string, points: number) {
    const res = await fetch(`/api/leaderboard/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ points }),
    });
    if (res.ok) {
      const data = await res.json();
      setEntries(data.entries ?? []);
    }
  }

  async function removeEntry(id: string) {
    const res = await fetch(`/api/leaderboard/${id}`, { method: "DELETE" });
    if (res.ok) {
      const data = await res.json();
      setEntries(data.entries ?? []);
    }
  }

  return (
    <div>
      <h1 className="text-xl font-black text-white uppercase mb-6">Bảng xếp hạng</h1>

      <div className="rounded-lg overflow-hidden overflow-x-auto">
        <table className="table-ranking min-w-[560px]">
          <thead>
            <tr>
              <th className="w-[10%]">Hạng</th>
              <th className="w-[30%] col-left pl-4">Tên HLV</th>
              <th className="w-[15%]">🥇</th>
              <th className="w-[15%]">🥈</th>
              <th className="w-[15%]">🥉</th>
              <th className="w-[10%]">Điểm</th>
              <th className="w-[5%]"></th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.rank}</td>
                <td className="col-left pl-4">{entry.name}</td>
                <td>{entry.gold}</td>
                <td>{entry.silver}</td>
                <td>{entry.bronze}</td>
                <td>
                  <input
                    type="number"
                    value={entry.points}
                    onChange={(e) => setLocalPoints(entry.id, Number(e.target.value))}
                    onBlur={(e) => commitPoints(entry.id, Number(e.target.value))}
                    className="w-16 bg-ink border border-blue rounded px-2 py-1 text-center text-champagne font-bold text-sm focus:outline-none"
                  />
                </td>
                <td>
                  <button
                    onClick={() => removeEntry(entry.id)}
                    className="text-red-bright hover:text-red"
                    aria-label={`Xóa ${entry.name}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
            {!loading && entries.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 text-white/40">
                  Chưa có dữ liệu.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
