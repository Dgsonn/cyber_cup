"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TEAMS } from "@/lib/data";
import { Team } from "@/lib/types";
import Modal from "./Modal";

export default function TeamsSection() {
  const [active, setActive] = useState<Team | null>(null);
  const [tab, setTab] = useState<"list" | "create">("list");

  return (
    <section id="danh-sach-doi" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="title-page text-3xl sm:text-4xl mb-2">
          <span className="tag text-6xl sm:text-7xl">Champions</span>
          Danh sách đội
        </h2>

        <div className="flex justify-center gap-4 my-8">
          <button
            onClick={() => setTab("list")}
            className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase transition-colors ${
              tab === "list" ? "bg-blue-btn text-white" : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            Danh Sách Đội
          </button>
          <button
            onClick={() => setTab("create")}
            className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase transition-colors ${
              tab === "create" ? "bg-blue-btn text-white" : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            Tạo Đội
          </button>
        </div>

        {tab === "list" ? (
          <div className="rounded-lg overflow-hidden overflow-x-auto">
            <table className="table-ranking min-w-[640px]">
              <thead>
                <tr>
                  <th className="w-[6%]">STT</th>
                  <th className="w-[20%] col-left pl-4">Tên đội bóng</th>
                  <th className="w-[16%]">Yêu cầu</th>
                  <th className="w-[10%]">Thể thức</th>
                  <th className="w-[10%]">Số lượng</th>
                  <th className="w-[10%]">Địa chỉ</th>
                  <th className="w-[20%]">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {TEAMS.map((team, i) => (
                  <motion.tr
                    key={team.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <td>{i + 1}</td>
                    <td className="col-left pl-4">
                      <strong className="uppercase">{team.name}</strong>
                    </td>
                    <td>{team.requirement}</td>
                    <td>{team.format}</td>
                    <td>
                      {team.members}/{team.maxMembers}
                    </td>
                    <td>{team.location}</td>
                    <td>
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setActive(team)}
                          className="btn-cyber-outline px-4 py-1.5 text-xs"
                        >
                          Chi tiết
                        </button>
                        <a href="#dang-ky" className="btn-cyber px-4 py-1.5 text-xs">
                          Gia nhập
                        </a>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-white/50 text-sm py-16 border border-white/10 rounded-lg">
            Tính năng tạo đội đang được phát triển. Vui lòng quay lại sau!
          </div>
        )}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} labelledBy="team-modal-title">
        {active && (
          <div>
            <h2
              id="team-modal-title"
              className="text-champagne uppercase text-xl font-black border-b-2 border-champagne pb-3 mb-4 shadow-champagne"
            >
              {active.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-4 text-white/85">
              <p><strong className="text-white">Đối tượng:</strong> {active.audience}</p>
              <p><strong className="text-white">Loại giải:</strong> {active.tier}</p>
              <p className="sm:col-span-2"><strong className="text-white">Địa điểm:</strong> {active.venue}</p>
              <p><strong className="text-white">Người phụ trách:</strong> {active.contactName}</p>
              <p><strong className="text-white">Liên hệ:</strong> {active.contactPhone}</p>
            </div>

            <hr className="border-champagne/20 my-4" />

            <div>
              <h3 className="text-champagne font-bold mb-2">Phần thưởng:</h3>
              <div className="bg-champagne/10 rounded-md p-3 text-sm space-y-1">
                {active.prizes.map((p) => (
                  <div key={p.rank}>
                    <strong>{p.rank}:</strong> {p.reward}
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-champagne/20 my-4" />

            <div>
              <h3 className="text-champagne font-bold mb-2">Lưu ý:</h3>
              <p className="text-sm italic text-white/70">{active.note}</p>
            </div>

            <div className="text-center mt-6">
              <button onClick={() => setActive(null)} className="btn-cyber px-8 py-2.5 text-sm">
                Đóng
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
