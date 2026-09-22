"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { LEADERBOARD } from "@/lib/data";
import { LeaderboardEntry } from "@/lib/types";

export default function LeaderboardAdmin() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>(LEADERBOARD);

  function updatePoints(name: string, points: number) {
    setEntries((list) =>
      list
        .map((e) => (e.name === name ? { ...e, points } : e))
        .sort((a, b) => b.points - a.points)
        .map((e, i) => ({ ...e, rank: i + 1 }))
    );
  }

  function removeEntry(name: string) {
    setEntries((list) => list.filter((e) => e.name !== name));
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
              <tr key={entry.name}>
                <td>{entry.rank}</td>
                <td className="col-left pl-4">{entry.name}</td>
                <td>{entry.medals.gold}</td>
                <td>{entry.medals.silver}</td>
                <td>{entry.medals.bronze}</td>
                <td>
                  <input
                    type="number"
                    value={entry.points}
                    onChange={(e) => updatePoints(entry.name, Number(e.target.value))}
                    className="w-16 bg-ink border border-blue rounded px-2 py-1 text-center text-champagne font-bold text-sm focus:outline-none"
                  />
                </td>
                <td>
                  <button
                    onClick={() => removeEntry(entry.name)}
                    className="text-red-bright hover:text-red"
                    aria-label={`Xóa ${entry.name}`}
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
