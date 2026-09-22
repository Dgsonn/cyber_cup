"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Team } from "@/lib/types";

const EMPTY = {
  name: "",
  requirement: "Không có yêu cầu",
  format: "1vs1",
  members: 0,
  maxMembers: 6,
  location: "Online",
};

export default function TeamsAdmin() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    fetch("/api/teams")
      .then((r) => r.json())
      .then((data) => setTeams(data.teams ?? []))
      .finally(() => setLoading(false));
  }, []);

  async function addTeam() {
    if (!form.name.trim()) return;
    const res = await fetch("/api/teams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) return;
    const data = await res.json();
    setTeams((t) => [...t, data.team]);
    setForm(EMPTY);
    setShowForm(false);
  }

  async function removeTeam(id: string) {
    setTeams((t) => t.filter((team) => team.id !== id));
    await fetch(`/api/teams/${id}`, { method: "DELETE" });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-black text-white uppercase">Đội thi đấu</h1>
        <button onClick={() => setShowForm((v) => !v)} className="btn-cyber-blue px-4 py-2 text-xs inline-flex items-center gap-1.5">
          <Plus size={14} /> Thêm đội
        </button>
      </div>

      {showForm && (
        <div className="rounded-lg bg-bg-panel border border-blue/30 p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Tên đội"
            className="bg-ink border border-blue rounded px-3 py-2 text-sm text-white focus:outline-none"
          />
          <input
            type="number"
            value={form.members}
            onChange={(e) => setForm({ ...form, members: Number(e.target.value) })}
            placeholder="Số thành viên"
            className="bg-ink border border-blue rounded px-3 py-2 text-sm text-white focus:outline-none"
          />
          <input
            type="number"
            value={form.maxMembers}
            onChange={(e) => setForm({ ...form, maxMembers: Number(e.target.value) })}
            placeholder="Tối đa"
            className="bg-ink border border-blue rounded px-3 py-2 text-sm text-white focus:outline-none"
          />
          <button onClick={addTeam} className="btn-cyber px-4 py-2 text-xs">
            Lưu đội mới
          </button>
        </div>
      )}

      <div className="rounded-lg overflow-hidden overflow-x-auto">
        <table className="table-ranking min-w-[700px]">
          <thead>
            <tr>
              <th className="w-[6%]">STT</th>
              <th className="w-[24%] col-left pl-4">Tên đội bóng</th>
              <th className="w-[16%]">Yêu cầu</th>
              <th className="w-[10%]">Thể thức</th>
              <th className="w-[10%]">Số lượng</th>
              <th className="w-[10%]">Địa chỉ</th>
              <th className="w-[14%]">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => (
              <tr key={team.id}>
                <td>{i + 1}</td>
                <td className="col-left pl-4">
                  <strong className="uppercase">{team.name}</strong>
                </td>
                <td>{team.requirement}</td>
                <td>{team.format}</td>
                <td>{team.members}/{team.maxMembers}</td>
                <td>{team.location}</td>
                <td>
                  <button
                    onClick={() => removeTeam(team.id)}
                    className="text-red-bright hover:text-red inline-flex items-center gap-1 text-xs font-bold"
                  >
                    <Trash2 size={14} /> Xóa
                  </button>
                </td>
              </tr>
            ))}
            {!loading && teams.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 text-white/40">
                  Chưa có đội nào.
                </td>
              </tr>
            )}
            {loading && (
              <tr>
                <td colSpan={7} className="py-6 text-white/40">
                  Đang tải...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
