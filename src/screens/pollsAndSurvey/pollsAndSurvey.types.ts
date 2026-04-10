export interface PollOption {
  id: number;
  label: string;
  percentage: number;
}
export interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  ends: string;
  endsAt?: string;
  totalVotes: number;
}
