import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const entries = await prisma.leaderboardEntry.findMany({ orderBy: { rank: "asc" } });
  return NextResponse.json({ entries });
}
