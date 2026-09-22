import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSessionCookie } from "@/lib/auth";

const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const username = typeof body?.username === "string" ? body.username.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  const email = typeof body?.email === "string" && body.email.trim() ? body.email.trim() : undefined;

  if (!USERNAME_RE.test(username)) {
    return NextResponse.json(
      { error: "Tên đăng nhập phải dài 3-20 ký tự, chỉ gồm chữ, số và gạch dưới." },
      { status: 400 }
    );
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: "Mật khẩu phải có ít nhất 6 ký tự." },
      { status: 400 }
    );
  }

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    return NextResponse.json(
      { error: "Tên đăng nhập đã được sử dụng." },
      { status: 409 }
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { username, email, passwordHash },
  });

  await createSessionCookie({ sub: user.id, username: user.username, role: user.role });

  return NextResponse.json({ username: user.username, role: user.role }, { status: 201 });
}
