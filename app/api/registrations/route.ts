import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: "Không có quyền." }, { status: 403 });

  const registrations = await prisma.registration.findMany({ orderBy: { submittedAt: "desc" } });
  return NextResponse.json({ registrations });
}
