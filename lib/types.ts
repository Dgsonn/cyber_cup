export type PrizeRow = {
  rank: string;
  reward: string;
};

export type Team = {
  id: string;
  name: string;
  requirement: string;
  format: string;
  members: number;
  maxMembers: number;
  location: string;
  tier: string;
  venue: string;
  audience: string;
  contactName: string;
  contactPhone: string;
  note: string;
  prizes: PrizeRow[];
};

export type LeaderboardEntry = {
  rank: number;
  name: string;
  medals: { gold: number; silver: number; bronze: number };
  points: number;
};

export type RewardItem = {
  id: string;
  name: string;
  cost: number;
  image: string;
  claimed: number;
  limit: number;
};

export type ExclusiveReward = {
  id: string;
  number: string;
  name: string;
  image: string;
  isNew: boolean;
};

// Flat shape returned by the leaderboard API/DB (admin dashboard only).
// The public-facing Leaderboard section still uses LeaderboardEntry above.
export type LeaderboardRow = {
  id: string;
  rank: number;
  name: string;
  gold: number;
  silver: number;
  bronze: number;
  points: number;
};

export type RegistrationStatus = "pending" | "approved" | "rejected";

export type Registration = {
  id: string;
  name: string;
  phone: string;
  coach: string;
  dob: string;
  submittedAt: string;
  status: RegistrationStatus;
};
