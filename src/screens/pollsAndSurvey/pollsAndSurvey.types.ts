export interface PollOption {
  id?: number | string;
  label: string;
  percentage: number;
}
export interface Poll {
  id: number | string;
  question: string;
  options: PollOption[];
  ends: string;
  endsAt?: string;
  totalVotes: number;
}
