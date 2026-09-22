import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/auth";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default async function AdminPage() {
  const session = await getCurrentSession();
  if (!session || session.role !== "admin") {
    redirect("/login");
  }

  return <AdminDashboard />;
}
