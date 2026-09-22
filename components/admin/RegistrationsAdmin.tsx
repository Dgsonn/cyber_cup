"use client";

import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";
import { REGISTRATIONS } from "@/lib/data";
import { Registration, RegistrationStatus } from "@/lib/types";
import { StatusBadge } from "./OverviewSection";

const TABS: { id: RegistrationStatus | "all"; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "pending", label: "Chờ duyệt" },
  { id: "approved", label: "Đã duyệt" },
  { id: "rejected", label: "Từ chối" },
];

export default function RegistrationsAdmin() {
  const [regs, setRegs] = useState<Registration[]>(REGISTRATIONS);
  const [tab, setTab] = useState<RegistrationStatus | "all">("all");

  const filtered = useMemo(
    () => (tab === "all" ? regs : regs.filter((r) => r.status === tab)),
    [regs, tab]
  );

  function setStatus(id: string, status: RegistrationStatus) {
    setRegs((list) => list.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  return (
    <div>
      <h1 className="text-xl font-black text-white uppercase mb-6">Báo danh thi đấu</h1>

      <div className="flex gap-2 mb-5 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase whitespace-nowrap transition-colors ${
              tab === t.id ? "bg-blue-btn text-white" : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-lg overflow-hidden overflow-x-auto">
        <table className="table-ranking min-w-[720px]">
          <thead>
            <tr>
              <th className="w-[18%] col-left pl-4">Họ tên</th>
              <th className="w-[14%]">SĐT</th>
              <th className="w-[14%]">Tên HLV</th>
              <th className="w-[12%]">Ngày sinh</th>
              <th className="w-[16%]">Thời gian gửi</th>
              <th className="w-[12%]">Trạng thái</th>
              <th className="w-[14%]">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id}>
                <td className="col-left pl-4">{r.name}</td>
                <td>{r.phone}</td>
                <td>{r.coach}</td>
                <td>{r.dob}</td>
                <td>{r.submittedAt}</td>
                <td>
                  <StatusBadge status={r.status} />
                </td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => setStatus(r.id, "approved")}
                      className="w-7 h-7 rounded-full bg-success/15 text-success flex items-center justify-center hover:bg-success/25"
                      aria-label="Duyệt"
                    >
                      <Check size={14} />
                    </button>
                    <button
                      onClick={() => setStatus(r.id, "rejected")}
                      className="w-7 h-7 rounded-full bg-red/15 text-red-bright flex items-center justify-center hover:bg-red/25"
                      aria-label="Từ chối"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 text-white/40">
                  Không có đơn nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
