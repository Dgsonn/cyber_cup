import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: "Không có quyền." }, { status: 403 });

  const { id } = await params;
  await prisma.team.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
