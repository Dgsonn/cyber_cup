import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: "Không có quyền." }, { status: 403 });

  const { id } = await params;
  const body = await req.json().catch(() => null);
  const data: { cost?: number; limit?: number } = {};
  if (Number.isFinite(Number(body?.cost))) data.cost = Number(body.cost);
  if (Number.isFinite(Number(body?.limit))) data.limit = Number(body.limit);

  const reward = await prisma.rewardItem.update({ where: { id }, data }).catch(() => null);
  return NextResponse.json({ reward });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: "Không có quyền." }, { status: 403 });

  const { id } = await params;
  await prisma.rewardItem.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
