export interface PollOption {
  label: string;
  percentage: number;
}
export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  ends: string;
  totalVotes: number;
}
