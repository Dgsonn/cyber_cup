import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";

const basePrizes = [
  { rank: "Hạng 1", reward: "2 Gói VIP Tháng · 10.000.000.000 Xu · 30.000 Điểm" },
  { rank: "Hạng 2", reward: "1 Gói VIP Tháng · 7.000.000.000 Xu · 15.000 Điểm" },
  { rank: "Hạng 3", reward: "2 Gói Bạc Tháng · 5.000.000.000 Xu · 10.000 Điểm" },
];

const baseVenue =
  "Ban tổ chức tổ chức đều đặn hàng tuần. Bạn có thể đăng ký thi đấu Online hoặc ra các Cyber Game đối tác.";

const baseNote =
  "Thông báo: Vận động viên tham gia thi đấu vui lòng tham gia nhóm chat để nhận thông tin và điều hành trận đấu (đây là yêu cầu bắt buộc).";

const TEAMS = [
  { name: "Phoenix Gaming", contactName: "Minh Anh", contactPhone: "090xxxxx21", members: 5 },
  { name: "Lionheart Esports", contactName: "Quốc Huy", contactPhone: "090xxxxx45", members: 6 },
  { name: "Storm-X Gaming", contactName: "Bảo Ngọc", contactPhone: "090xxxxx78", members: 5 },
  { name: "Titan Center", contactName: "Anh Tuấn", contactPhone: "090xxxxx12", members: 5 },
  { name: "Dragonfly GC", contactName: "Thu Hà", contactPhone: "090xxxxx33", members: 6 },
  { name: "Night Wolf", contactName: "Đức Long", contactPhone: "090xxxxx56", members: 5 },
];

const LEADERBOARD = [
  { rank: 1, name: "MANxSir", gold: 0, silver: 0, bronze: 28, points: 30 },
  { rank: 2, name: "CFCxThảoVy", gold: 0, silver: 0, bronze: 27, points: 29 },
  { rank: 3, name: "ViRotate 2", gold: 0, silver: 0, bronze: 26, points: 28 },
  { rank: 4, name: "ChimSeAnDem", gold: 0, silver: 0, bronze: 25, points: 27 },
  { rank: 5, name: "Taca Vole Ball", gold: 0, silver: 0, bronze: 24, points: 26 },
  { rank: 6, name: "Hp®beerken®", gold: 0, silver: 0, bronze: 23, points: 25 },
  { rank: 7, name: "Chồn Xanh", gold: 0, silver: 0, bronze: 22, points: 24 },
  { rank: 8, name: "WACxSmirnoff", gold: 0, silver: 0, bronze: 21, points: 23 },
  { rank: 9, name: "ITxMayMan Thoi", gold: 0, silver: 0, bronze: 20, points: 22 },
  { rank: 10, name: "XuTi36", gold: 0, silver: 0, bronze: 19, points: 21 },
];

const REWARDS = [
  { name: "Gói phụ kiện đặc biệt", cost: 20, image: "jersey", claimed: 0, limit: 1 },
  { name: "Gói vật phẩm cao cấp", cost: 10, image: "keyboard", claimed: 0, limit: 2 },
  { name: "Gói vật phẩm hiếm", cost: 5, image: "mouse", claimed: 0, limit: 2 },
  { name: "Gói vật phẩm phổ biến", cost: 3, image: "bag", claimed: 0, limit: 2 },
];

const REGISTRATIONS = [
  { name: "Nguyễn Văn An", phone: "0901234567", coach: "AnPro99", dob: "12/03/2001", status: "pending" },
  { name: "Trần Thị Bích", phone: "0912345678", coach: "BichLucky", dob: "05/07/2000", status: "approved" },
  { name: "Lê Hoàng Cường", phone: "0923456789", coach: "CuongX", dob: "28/11/1999", status: "pending" },
  { name: "Phạm Minh Đức", phone: "0934567890", coach: "DucFlash", dob: "17/01/2002", status: "rejected" },
  { name: "Vũ Thu Hà", phone: "0945678901", coach: "HaStar", dob: "09/09/2001", status: "pending" },
  { name: "Đặng Quốc Huy", phone: "0956789012", coach: "HuyKing", dob: "22/05/2000", status: "approved" },
];

async function main() {
  const teamCount = await prisma.team.count();
  if (teamCount === 0) {
    for (const t of TEAMS) {
      await prisma.team.create({
        data: {
          name: t.name,
          requirement: "Không có yêu cầu",
          format: "1vs1",
          members: t.members,
          maxMembers: 6,
          location: "Online",
          tier: "GOLD",
          venue: baseVenue,
          audience: "Tất cả Huấn Luyện Viên",
          contactName: t.contactName,
          contactPhone: t.contactPhone,
          note: baseNote,
          prizes: basePrizes,
        },
      });
    }
    console.log(`Seeded ${TEAMS.length} teams`);
  }

  const leaderboardCount = await prisma.leaderboardEntry.count();
  if (leaderboardCount === 0) {
    for (const e of LEADERBOARD) {
      await prisma.leaderboardEntry.create({ data: e });
    }
    console.log(`Seeded ${LEADERBOARD.length} leaderboard entries`);
  }

  const rewardCount = await prisma.rewardItem.count();
  if (rewardCount === 0) {
    for (const r of REWARDS) {
      await prisma.rewardItem.create({ data: r });
    }
    console.log(`Seeded ${REWARDS.length} rewards`);
  }

  const registrationCount = await prisma.registration.count();
  if (registrationCount === 0) {
    for (const r of REGISTRATIONS) {
      await prisma.registration.create({ data: r });
    }
    console.log(`Seeded ${REGISTRATIONS.length} registrations`);
  }

  const admin = await prisma.user.findUnique({ where: { username: "admin" } });
  if (!admin) {
    const passwordHash = await bcrypt.hash("admin123", 10);
    await prisma.user.create({
      data: { username: "admin", passwordHash, role: "admin" },
    });
    console.log("Seeded admin user (username: admin / password: admin123)");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
