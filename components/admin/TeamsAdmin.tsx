"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { TEAMS } from "@/lib/data";
import { Team } from "@/lib/types";

const EMPTY: Omit<Team, "id" | "prizes" | "venue" | "audience" | "contactName" | "contactPhone" | "note" | "tier"> = {
  name: "",
  requirement: "Không có yêu cầu",
  format: "1vs1",
  members: 0,
  maxMembers: 6,
  location: "Online",
};

export default function TeamsAdmin() {
  const [teams, setTeams] = useState<Team[]>(TEAMS);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY);

  function addTeam() {
    if (!form.name.trim()) return;
    const newTeam: Team = {
      ...form,
      id: `t-${Date.now()}`,
      tier: "GOLD",
      venue: "Ban tổ chức tổ chức đều đặn hàng tuần.",
      audience: "Tất cả Huấn Luyện Viên",
      contactName: "—",
      contactPhone: "—",
      note: "Đội mới được thêm bởi quản trị viên.",
      prizes: [],
    };
    setTeams((t) => [...t, newTeam]);
    setForm(EMPTY);
    setShowForm(false);
  }

  function removeTeam(id: string) {
    setTeams((t) => t.filter((team) => team.id !== id));
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
            {teams.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 text-white/40">
                  Chưa có đội nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
