"use client";

import { useState } from "react";
import AdminSidebar, { AdminSection } from "@/components/admin/AdminSidebar";
import OverviewSection from "@/components/admin/OverviewSection";
import TeamsAdmin from "@/components/admin/TeamsAdmin";
import LeaderboardAdmin from "@/components/admin/LeaderboardAdmin";
import RewardsAdmin from "@/components/admin/RewardsAdmin";
import RegistrationsAdmin from "@/components/admin/RegistrationsAdmin";

export default function AdminDashboard() {
  const [section, setSection] = useState<AdminSection>("overview");

  return (
    <div className="min-h-screen bg-bg flex">
      <AdminSidebar active={section} onChange={setSection} />
      <main className="flex-1 p-6 sm:p-8 overflow-x-hidden">
        {section === "overview" && <OverviewSection />}
        {section === "teams" && <TeamsAdmin />}
        {section === "leaderboard" && <LeaderboardAdmin />}
        {section === "rewards" && <RewardsAdmin />}
        {section === "registrations" && <RegistrationsAdmin />}
      </main>
    </div>
  );
}
