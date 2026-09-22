import path from "node:path";
import { PrismaClient } from "./generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// SQLite `file:` URLs in DATABASE_URL are resolved relative to process.cwd(),
// which can differ from the project root depending on how Next.js is invoked.
// Pin it to an absolute path so the client always finds prisma/dev.db.
const dbPath = path.join(process.cwd(), "prisma", "dev.db").replace(/\\/g, "/");

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ datasourceUrl: `file:${dbPath}` });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
