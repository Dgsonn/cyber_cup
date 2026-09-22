import {
  LeaderboardEntry,
  Match,
  NewsItem,
  RewardItem,
  StandingRow,
  Team,
  Tournament,
} from "./types";

export const TOURNAMENT = {
  name: "SUMMER CUP",
  season: "Mùa III",
  eventDateISO: "2026-12-02T09:00:00+07:00",
  registerDeadline: "21/09/2026",
  totalPrize: "500.000.000đ",
  format: "Đối kháng 1vs1 – Loại trực tiếp",
};

export const STATS = [
  { icon: "teams", value: "6", label: "Đội", sublabel: "Những đội tuyển xuất sắc nhất" },
  { icon: "players", value: "48", label: "Tuyển thủ", sublabel: "Tài năng hàng đầu cộng đồng" },
  { icon: "prize", value: "500.000.000đ", label: "Giải thưởng", sublabel: "Tổng giá trị giải thưởng" },
];

const basePrizes = [
  { rank: "Vô địch", reward: "300.000.000đ + Cúp vô địch" },
  { rank: "Á quân", reward: "100.000.000đ" },
  { rank: "Hạng 3", reward: "50.000.000đ" },
  { rank: "Hạng 4", reward: "20.000.000đ" },
  { rank: "Top 8", reward: "5.000.000đ / đội" },
];

export const TEAMS: Team[] = [
  {
    id: "phoenix",
    name: "PHOENIX GAMING",
    shortName: "PHX",
    color: "#66e28e",
    members: 7,
    maxMembers: 8,
    tier: "Giải đấu Hạng Vàng",
    venue: "Trực tuyến & Cyber đối tác toàn quốc",
    audience: "Toàn bộ game thủ từ 16 tuổi trở lên",
    eventDate: "02/12/2026",
    registerDeadline: "21/09/2026",
    contactName: "Minh Anh",
    contactPhone: "090x xxx x21",
    note: "Cần cung cấp CCCD khi nhận thưởng.",
    prizes: basePrizes,
  },
  {
    id: "lionheart",
    name: "LIONHEART ESPORTS",
    shortName: "LHE",
    color: "#ffdd1b",
    members: 6,
    maxMembers: 8,
    tier: "Giải đấu Hạng Vàng",
    venue: "Trực tuyến & Cyber đối tác toàn quốc",
    audience: "Toàn bộ game thủ từ 16 tuổi trở lên",
    eventDate: "02/12/2026",
    registerDeadline: "21/09/2026",
    contactName: "Quốc Huy",
    contactPhone: "090x xxx x45",
    note: "Đội trưởng chịu trách nhiệm xác nhận danh sách.",
    prizes: basePrizes,
  },
  {
    id: "stormx",
    name: "STORM-X GAMING",
    shortName: "SXG",
    color: "#00fcff",
    members: 8,
    maxMembers: 8,
    tier: "Giải đấu Hạng Vàng",
    venue: "Trực tuyến & Cyber đối tác toàn quốc",
    audience: "Toàn bộ game thủ từ 16 tuổi trở lên",
    eventDate: "02/12/2026",
    registerDeadline: "21/09/2026",
    contactName: "Bảo Ngọc",
    contactPhone: "090x xxx x78",
    note: "Đội đã đủ số lượng thành viên.",
    prizes: basePrizes,
  },
  {
    id: "titan",
    name: "TITAN CENTER",
    shortName: "TTC",
    color: "#f3b65d",
    members: 5,
    maxMembers: 8,
    tier: "Giải đấu Hạng Vàng",
    venue: "Trực tuyến & Cyber đối tác toàn quốc",
    audience: "Toàn bộ game thủ từ 16 tuổi trở lên",
    eventDate: "02/12/2026",
    registerDeadline: "21/09/2026",
    contactName: "Anh Tuấn",
    contactPhone: "090x xxx x12",
    note: "Còn nhận đăng ký bổ sung.",
    prizes: basePrizes,
  },
  {
    id: "dragonfly",
    name: "DRAGONFLY GC",
    shortName: "DFG",
    color: "#fc4a4d",
    members: 7,
    maxMembers: 8,
    tier: "Giải đấu Hạng Vàng",
    venue: "Trực tuyến & Cyber đối tác toàn quốc",
    audience: "Toàn bộ game thủ từ 16 tuổi trở lên",
    eventDate: "02/12/2026",
    registerDeadline: "21/09/2026",
    contactName: "Thu Hà",
    contactPhone: "090x xxx x33",
    note: "Ưu tiên game thủ khu vực miền Nam.",
    prizes: basePrizes,
  },
  {
    id: "nightwolf",
    name: "NIGHT WOLF",
    shortName: "NWF",
    color: "#a9f2c1",
    members: 8,
    maxMembers: 8,
    tier: "Giải đấu Hạng Vàng",
    venue: "Trực tuyến & Cyber đối tác toàn quốc",
    audience: "Toàn bộ game thủ từ 16 tuổi trở lên",
    eventDate: "02/12/2026",
    registerDeadline: "21/09/2026",
    contactName: "Đức Long",
    contactPhone: "090x xxx x56",
    note: "Đội đã đủ số lượng thành viên.",
    prizes: basePrizes,
  },
];

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: "MANxSir", team: "PHOENIX GAMING", points: 30, medals: { gold: 5, silver: 2, bronze: 1 } },
  { rank: 2, name: "K1ngPin", team: "LIONHEART ESPORTS", points: 27, medals: { gold: 4, silver: 3, bronze: 0 } },
  { rank: 3, name: "V.Anh_Pro", team: "STORM-X GAMING", points: 24, medals: { gold: 3, silver: 3, bronze: 2 } },
  { rank: 4, name: "Falcon99", team: "TITAN CENTER", points: 21, medals: { gold: 3, silver: 1, bronze: 3 } },
  { rank: 5, name: "ThanhCong", team: "DRAGONFLY GC", points: 19, medals: { gold: 2, silver: 3, bronze: 1 } },
  { rank: 6, name: "NightRider", team: "NIGHT WOLF", points: 17, medals: { gold: 2, silver: 2, bronze: 2 } },
  { rank: 7, name: "BinhMinh", team: "PHOENIX GAMING", points: 15, medals: { gold: 2, silver: 1, bronze: 1 } },
  { rank: 8, name: "SkyHigh", team: "LIONHEART ESPORTS", points: 13, medals: { gold: 1, silver: 2, bronze: 2 } },
  { rank: 9, name: "QuangDũng", team: "STORM-X GAMING", points: 11, medals: { gold: 1, silver: 1, bronze: 2 } },
  { rank: 10, name: "LucyLe", team: "TITAN CENTER", points: 9, medals: { gold: 1, silver: 1, bronze: 0 } },
];

export const REWARDS: RewardItem[] = [
  { id: "r1", name: "Áo đấu phiên bản giới hạn", cost: 20, image: "jersey", stock: 12 },
  { id: "r2", name: "Bàn phím cơ Summer Cup", cost: 20, image: "keyboard", stock: 8 },
  { id: "r3", name: "Chuột gaming logo giải đấu", cost: 10, image: "mouse", stock: 20 },
  { id: "r4", name: "Balo thi đấu chính thức", cost: 10, image: "bag", stock: 15 },
  { id: "r5", name: "Bình giữ nhiệt Summer Cup", cost: 5, image: "bottle", stock: 30 },
  { id: "r6", name: "Poster chữ ký đội tuyển", cost: 5, image: "poster", stock: 25 },
  { id: "r7", name: "Móc khóa kỷ niệm", cost: 3, image: "keychain", stock: 50 },
  { id: "r8", name: "Sticker set giải đấu", cost: 3, image: "sticker", stock: 60 },
];

export const USER_POINTS = 18;

export const TOURNAMENTS: Tournament[] = [
  {
    id: "summer-cup",
    name: "SUMMER CUP 2026",
    tag: "FC ONLINE TOURNAMENT",
    status: "live",
    dateRange: "05.11 - 02.12.2026",
    format: "Online",
    totalPrize: "500.000.000đ",
    color: "#66e28e",
  },
  {
    id: "summer-league",
    name: "SUMMER LEAGUE 2026",
    tag: "FC ONLINE LEAGUE",
    status: "upcoming",
    dateRange: "10.12 - 30.12.2026",
    format: "Online",
    totalPrize: "150.000.000đ",
    color: "#ffdd1b",
  },
  {
    id: "summer-open",
    name: "SUMMER OPEN 2026",
    tag: "FC ONLINE COMMUNITY",
    status: "open",
    dateRange: "20.12.2026 - 10.01.2027",
    format: "Online",
    totalPrize: "80.000.000đ",
    color: "#00fcff",
  },
  {
    id: "summer-masters",
    name: "SUMMER MASTERS 2026",
    tag: "FC ONLINE MASTERS",
    status: "upcoming",
    dateRange: "15.01 - 05.02.2027",
    format: "Offline (TP.HCM)",
    totalPrize: "300.000.000đ",
    color: "#f3b65d",
  },
];

export const MATCHES: Match[] = [
  { id: "m1", date: "10.11.2026", time: "19:00", teamA: "PHOENIX GAMING", teamB: "DRAGONFLY GC", stage: "Vòng bảng", played: true },
  { id: "m2", date: "10.11.2026", time: "20:30", teamA: "STORM-X GAMING", teamB: "TITAN CENTER", stage: "Vòng bảng", played: true },
  { id: "m3", date: "11.11.2026", time: "19:00", teamA: "LIONHEART ESPORTS", teamB: "NIGHT WOLF", stage: "Vòng bảng", played: true },
  { id: "m4", date: "17.11.2026", time: "19:00", teamA: "PHOENIX GAMING", teamB: "STORM-X GAMING", stage: "Vòng bảng", played: false },
  { id: "m5", date: "17.11.2026", time: "20:30", teamA: "TITAN CENTER", teamB: "LIONHEART ESPORTS", stage: "Vòng bảng", played: false },
  { id: "m6", date: "24.11.2026", time: "19:00", teamA: "DRAGONFLY GC", teamB: "NIGHT WOLF", stage: "Playoff", played: false },
  { id: "m7", date: "02.12.2026", time: "19:00", teamA: "PHOENIX GAMING", teamB: "LIONHEART ESPORTS", stage: "Chung kết", played: false },
];

export const STANDINGS: StandingRow[] = [
  { team: "PHOENIX GAMING", color: "#66e28e", played: 3, win: 3, draw: 0, lose: 0, points: 9 },
  { team: "STORM-X GAMING", color: "#00fcff", played: 3, win: 2, draw: 1, lose: 0, points: 7 },
  { team: "LIONHEART ESPORTS", color: "#ffdd1b", played: 3, win: 2, draw: 0, lose: 1, points: 6 },
  { team: "TITAN CENTER", color: "#f3b65d", played: 3, win: 1, draw: 1, lose: 1, points: 4 },
  { team: "DRAGONFLY GC", color: "#fc4a4d", played: 3, win: 1, draw: 1, lose: 1, points: 4 },
  { team: "NIGHT WOLF", color: "#a9f2c1", played: 3, win: 0, draw: 0, lose: 3, points: 0 },
];

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "01.11.2026",
    tag: "Thông báo",
    title: "Chính thức khởi động Summer Cup 2026 – Cơ hội khẳng định bản lĩnh HLV",
    excerpt:
      "Summer Cup 2026 chính thức mở đăng ký, hứa hẹn mang đến những trận đấu kịch tính với dàn HLV hấp dẫn nhất mùa giải.",
  },
  {
    id: "n2",
    date: "05.11.2026",
    tag: "Lịch thi đấu",
    title: "Lịch thi đấu vòng bảng Summer Cup 2026 đã được công bố",
    excerpt:
      "6 đội tuyển đã sẵn sàng, cùng theo dõi lịch thi đấu chi tiết của vòng bảng giải đấu.",
  },
  {
    id: "n3",
    date: "12.11.2026",
    tag: "Nổi bật",
    title: "Những gương mặt đáng chú ý tại Summer Cup 2026",
    excerpt:
      "Cùng điểm qua những đội tuyển và tuyển thủ được đánh giá cao nhất tại giải đấu lần này.",
  },
];
