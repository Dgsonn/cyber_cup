import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSessionCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const username = typeof body?.username === "string" ? body.username.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  const invalidCreds = () =>
    NextResponse.json(
      { error: "Tên đăng nhập hoặc mật khẩu không đúng." },
      { status: 401 }
    );

  if (!username || !password) return invalidCreds();

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return invalidCreds();

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return invalidCreds();

  await createSessionCookie({ sub: user.id, username: user.username, role: user.role });

  return NextResponse.json({ username: user.username, role: user.role });
}
