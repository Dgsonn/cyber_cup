import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function GET() {
  const rewards = await prisma.rewardItem.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json({ rewards });
}

export async function POST(req: NextRequest) {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: "Không có quyền." }, { status: 403 });

  const body = await req.json().catch(() => null);
  const reward = await prisma.rewardItem.create({
    data: {
      name: typeof body?.name === "string" && body.name.trim() ? body.name.trim() : "Vật phẩm mới",
      cost: Number(body?.cost) || 5,
      image: typeof body?.image === "string" ? body.image : "bag",
      claimed: 0,
      limit: Number(body?.limit) || 1,
    },
  });

  return NextResponse.json({ reward }, { status: 201 });
}
