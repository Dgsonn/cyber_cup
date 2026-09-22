import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

async function recomputeRanks() {
  const all = await prisma.leaderboardEntry.findMany({ orderBy: { points: "desc" } });
  await prisma.$transaction(
    all.map((e, i) => prisma.leaderboardEntry.update({ where: { id: e.id }, data: { rank: i + 1 } }))
  );
  return prisma.leaderboardEntry.findMany({ orderBy: { rank: "asc" } });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: "Không có quyền." }, { status: 403 });

  const { id } = await params;
  const body = await req.json().catch(() => null);
  const points = Number(body?.points);
  if (!Number.isFinite(points)) {
    return NextResponse.json({ error: "Điểm không hợp lệ." }, { status: 400 });
  }

  await prisma.leaderboardEntry.update({ where: { id }, data: { points } }).catch(() => null);
  const entries = await recomputeRanks();
  return NextResponse.json({ entries });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: "Không có quyền." }, { status: 403 });

  const { id } = await params;
  await prisma.leaderboardEntry.delete({ where: { id } }).catch(() => null);
  const entries = await recomputeRanks();
  return NextResponse.json({ entries });
}
