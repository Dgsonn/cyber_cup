import { ExclusiveReward, LeaderboardEntry, Registration, RewardItem, Team } from "./types";

export const TOURNAMENT = {
  name: "SUMMER CUP",
  season: "Mùa III",
  totalPrize: "500.000.000đ",
};

const basePrizes = [
  { rank: "Hạng 1", reward: "2 Gói VIP Tháng · 10.000.000.000 Xu · 30.000 Điểm" },
  { rank: "Hạng 2", reward: "1 Gói VIP Tháng · 7.000.000.000 Xu · 15.000 Điểm" },
  { rank: "Hạng 3", reward: "2 Gói Bạc Tháng · 5.000.000.000 Xu · 10.000 Điểm" },
];

const baseVenue =
  "Ban tổ chức tổ chức đều đặn hàng tuần. Bạn có thể đăng ký thi đấu Online hoặc ra các Cyber Game đối tác.";

const baseNote =
  "Thông báo: Vận động viên tham gia thi đấu vui lòng tham gia nhóm chat để nhận thông tin và điều hành trận đấu (đây là yêu cầu bắt buộc).";

export const TEAMS: Team[] = [
  {
    id: "phoenix",
    name: "Phoenix Gaming",
    requirement: "Không có yêu cầu",
    format: "1vs1",
    members: 5,
    maxMembers: 6,
    location: "Online",
    tier: "GOLD",
    venue: baseVenue,
    audience: "Tất cả Huấn Luyện Viên",
    contactName: "Minh Anh",
    contactPhone: "090xxxxx21",
    note: baseNote,
    prizes: basePrizes,
  },
  {
    id: "lionheart",
    name: "Lionheart Esports",
    requirement: "Không có yêu cầu",
    format: "1vs1",
    members: 6,
    maxMembers: 6,
    location: "Online",
    tier: "GOLD",
    venue: baseVenue,
    audience: "Tất cả Huấn Luyện Viên",
    contactName: "Quốc Huy",
    contactPhone: "090xxxxx45",
    note: baseNote,
    prizes: basePrizes,
  },
  {
    id: "stormx",
    name: "Storm-X Gaming",
    requirement: "Không có yêu cầu",
    format: "1vs1",
    members: 5,
    maxMembers: 6,
    location: "Online",
    tier: "GOLD",
    venue: baseVenue,
    audience: "Tất cả Huấn Luyện Viên",
    contactName: "Bảo Ngọc",
    contactPhone: "090xxxxx78",
    note: baseNote,
    prizes: basePrizes,
  },
  {
    id: "titan",
    name: "Titan Center",
    requirement: "Không có yêu cầu",
    format: "1vs1",
    members: 5,
    maxMembers: 6,
    location: "Online",
    tier: "GOLD",
    venue: baseVenue,
    audience: "Tất cả Huấn Luyện Viên",
    contactName: "Anh Tuấn",
    contactPhone: "090xxxxx12",
    note: baseNote,
    prizes: basePrizes,
  },
  {
    id: "dragonfly",
    name: "Dragonfly GC",
    requirement: "Không có yêu cầu",
    format: "1vs1",
    members: 6,
    maxMembers: 6,
    location: "Online",
    tier: "GOLD",
    venue: baseVenue,
    audience: "Tất cả Huấn Luyện Viên",
    contactName: "Thu Hà",
    contactPhone: "090xxxxx33",
    note: baseNote,
    prizes: basePrizes,
  },
  {
    id: "nightwolf",
    name: "Night Wolf",
    requirement: "Không có yêu cầu",
    format: "1vs1",
    members: 5,
    maxMembers: 6,
    location: "Online",
    tier: "GOLD",
    venue: baseVenue,
    audience: "Tất cả Huấn Luyện Viên",
    contactName: "Đức Long",
    contactPhone: "090xxxxx56",
    note: baseNote,
    prizes: basePrizes,
  },
];

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: "MANxSir", medals: { gold: 0, silver: 0, bronze: 28 }, points: 30 },
  { rank: 2, name: "CFCxThảoVy", medals: { gold: 0, silver: 0, bronze: 27 }, points: 29 },
  { rank: 3, name: "ViRotate 2", medals: { gold: 0, silver: 0, bronze: 26 }, points: 28 },
  { rank: 4, name: "ChimSeAnDem", medals: { gold: 0, silver: 0, bronze: 25 }, points: 27 },
  { rank: 5, name: "Taca Vole Ball", medals: { gold: 0, silver: 0, bronze: 24 }, points: 26 },
  { rank: 6, name: "Hp®beerken®", medals: { gold: 0, silver: 0, bronze: 23 }, points: 25 },
  { rank: 7, name: "Chồn Xanh", medals: { gold: 0, silver: 0, bronze: 22 }, points: 24 },
  { rank: 8, name: "WACxSmirnoff", medals: { gold: 0, silver: 0, bronze: 21 }, points: 23 },
  { rank: 9, name: "ITxMayMan Thoi", medals: { gold: 0, silver: 0, bronze: 20 }, points: 22 },
  { rank: 10, name: "XuTi36", medals: { gold: 0, silver: 0, bronze: 19 }, points: 21 },
];

export const REWARDS: RewardItem[] = [
  { id: "r1", name: "Gói phụ kiện đặc biệt", cost: 20, image: "jersey", claimed: 0, limit: 1 },
  { id: "r2", name: "Gói vật phẩm cao cấp", cost: 10, image: "keyboard", claimed: 0, limit: 2 },
  { id: "r3", name: "Gói vật phẩm hiếm", cost: 5, image: "mouse", claimed: 0, limit: 2 },
  { id: "r4", name: "Gói vật phẩm phổ biến", cost: 3, image: "bag", claimed: 0, limit: 2 },
];

export const USER_POINTS = 18;

export const EXCLUSIVE_REWARDS: ExclusiveReward[] = [
  { id: "e1", number: "01", name: "Áo Phông Summer Cup", image: "jersey", isNew: true },
  { id: "e2", number: "02", name: "Lót Chuột Summer Cup", image: "mouse", isNew: true },
  { id: "e3", number: "03", name: "Mũ Lưỡi Trai Summer Cup", image: "cap", isNew: true },
];

export const REGISTRATIONS: Registration[] = [
  { id: "g1", name: "Nguyễn Văn An", phone: "0901234567", coach: "AnPro99", dob: "12/03/2001", submittedAt: "20/09/2026 14:32", status: "pending" },
  { id: "g2", name: "Trần Thị Bích", phone: "0912345678", coach: "BichLucky", dob: "05/07/2000", submittedAt: "20/09/2026 15:10", status: "approved" },
  { id: "g3", name: "Lê Hoàng Cường", phone: "0923456789", coach: "CuongX", dob: "28/11/1999", submittedAt: "21/09/2026 09:02", status: "pending" },
  { id: "g4", name: "Phạm Minh Đức", phone: "0934567890", coach: "DucFlash", dob: "17/01/2002", submittedAt: "21/09/2026 10:45", status: "rejected" },
  { id: "g5", name: "Vũ Thu Hà", phone: "0945678901", coach: "HaStar", dob: "09/09/2001", submittedAt: "21/09/2026 11:20", status: "pending" },
  { id: "g6", name: "Đặng Quốc Huy", phone: "0956789012", coach: "HuyKing", dob: "22/05/2000", submittedAt: "22/09/2026 08:15", status: "approved" },
];
