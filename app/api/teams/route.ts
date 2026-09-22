import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth";

export async function GET() {
  const teams = await prisma.team.findMany({ orderBy: { createdAt: "asc" } });
  return NextResponse.json({ teams });
}

export async function POST(req: NextRequest) {
  const session = await requireAdminSession();
  if (!session) return NextResponse.json({ error: "Không có quyền." }, { status: 403 });

  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  if (!name) {
    return NextResponse.json({ error: "Tên đội không được để trống." }, { status: 400 });
  }

  const team = await prisma.team.create({
    data: {
      name,
      requirement: typeof body?.requirement === "string" ? body.requirement : "Không có yêu cầu",
      format: typeof body?.format === "string" ? body.format : "1vs1",
      members: Number(body?.members) || 0,
      maxMembers: Number(body?.maxMembers) || 6,
      location: typeof body?.location === "string" ? body.location : "Online",
      tier: "GOLD",
      venue: "Ban tổ chức tổ chức đều đặn hàng tuần.",
      audience: "Tất cả Huấn Luyện Viên",
      contactName: "—",
      contactPhone: "—",
      note: "Đội mới được thêm bởi quản trị viên.",
      prizes: [],
    },
  });

  return NextResponse.json({ team }, { status: 201 });
}
