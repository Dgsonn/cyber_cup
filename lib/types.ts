export type PrizeRow = {
  rank: string;
  reward: string;
};

export type Team = {
  id: string;
  name: string;
  shortName: string;
  color: string;
  members: number;
  maxMembers: number;
  tier: string;
  venue: string;
  audience: string;
  eventDate: string;
  registerDeadline: string;
  contactName: string;
  contactPhone: string;
  note: string;
  prizes: PrizeRow[];
};

export type LeaderboardEntry = {
  rank: number;
  name: string;
  team: string;
  points: number;
  medals: { gold: number; silver: number; bronze: number };
};

export type RewardItem = {
  id: string;
  name: string;
  cost: number;
  image: string;
  stock: number;
};

export type TournamentStatus = "live" | "open" | "upcoming";

export type Tournament = {
  id: string;
  name: string;
  tag: string;
  status: TournamentStatus;
  dateRange: string;
  format: string;
  totalPrize: string;
  color: string;
};

export type MatchStage = "Vòng bảng" | "Playoff" | "Chung kết";

export type Match = {
  id: string;
  date: string;
  time: string;
  teamA: string;
  teamB: string;
  stage: MatchStage;
  played: boolean;
};

export type StandingRow = {
  team: string;
  color: string;
  played: number;
  win: number;
  draw: number;
  lose: number;
  points: number;
};

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
};
