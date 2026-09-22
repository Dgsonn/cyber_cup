"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Users, CalendarDays } from "lucide-react";
import { TEAMS } from "@/lib/data";
import { Team } from "@/lib/types";
import Modal from "./Modal";

function TeamCard({ team, onOpen, index }: { team: Team; onOpen: () => void; index: number }) {
  const pct = Math.round((team.members / team.maxMembers) * 100);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="rounded-2xl bg-bg-panel border border-white/10 p-5 flex flex-col gap-4 hover:border-mint/50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-display text-sm shrink-0"
          style={{ backgroundColor: `${team.color}22`, color: team.color, border: `1px solid ${team.color}` }}
        >
          {team.shortName}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-sm sm:text-base truncate">{team.name}</h3>
          <span className="text-xs text-white/50">{team.tier}</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-xs text-white/60 mb-1">
          <span className="flex items-center gap-1">
            <Users size={12} /> Thành viên
          </span>
          <span>
            {team.members}/{team.maxMembers}
          </span>
        </div>
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, backgroundColor: team.color }}
          />
        </div>
      </div>

      <button
        onClick={onOpen}
        className="mt-auto text-sm font-bold rounded-full py-2 border border-mint/40 text-mint hover:bg-mint hover:text-bg-deep transition-colors"
      >
        Xem chi tiết
      </button>
    </motion.div>
  );
}

export default function TeamsSection() {
  const [active, setActive] = useState<Team | null>(null);

  return (
    <section id="doi-thi-dau" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">
          Danh sách <span className="text-mint">đội thi đấu</span>
        </h2>
        <p className="text-center text-white/60 mt-3 max-w-lg mx-auto text-sm">
          8 đội tuyển mạnh nhất mùa giải tranh tài tại vòng loại trực tiếp Summer Cup {new Date().getFullYear()}.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {TEAMS.map((team, i) => (
            <TeamCard key={team.id} team={team} index={i} onOpen={() => setActive(team)} />
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} labelledBy="team-modal-title">
        {active && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display text-sm shrink-0"
                style={{ backgroundColor: `${active.color}22`, color: active.color, border: `1px solid ${active.color}` }}
              >
                {active.shortName}
              </div>
              <div>
                <h3 id="team-modal-title" className="font-display text-lg">
                  {active.name}
                </h3>
                <span className="text-xs text-gold">{active.tier}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-5">
              <InfoRow icon={<Users size={14} />} label="Đối tượng" value={active.audience} />
              <InfoRow icon={<MapPin size={14} />} label="Địa điểm" value={active.venue} />
              <InfoRow icon={<CalendarDays size={14} />} label="Ngày thi đấu" value={active.eventDate} />
              <InfoRow icon={<CalendarDays size={14} />} label="Hạn đăng ký" value={active.registerDeadline} />
              <InfoRow icon={<Phone size={14} />} label="Liên hệ" value={`${active.contactName} · ${active.contactPhone}`} />
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-mint text-sm mb-2">Phần thưởng</h4>
              <div className="rounded-xl border border-white/10 overflow-hidden">
                {active.prizes.map((p, i) => (
                  <div
                    key={p.rank}
                    className={`flex justify-between px-4 py-2 text-sm ${i % 2 ? "bg-white/5" : ""}`}
                  >
                    <span className="text-white/70">{p.rank}</span>
                    <span className="font-bold text-gold">{p.reward}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-white/50 italic">Lưu ý: {active.note}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2">
      <span className="text-mint mt-0.5">{icon}</span>
      <div>
        <div className="text-[10px] uppercase text-white/40">{label}</div>
        <div className="text-white/85">{value}</div>
      </div>
    </div>
  );
}
