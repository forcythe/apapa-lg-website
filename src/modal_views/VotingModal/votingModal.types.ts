import { Poll } from "@/screens/pollsAndSurvey/pollsAndSurvey.types";

export interface IVotingModal {
  poll?: Poll;
  nin: string;
  refetch: () => void;
  onPollUpdated: (updatedPoll: Poll) => void;
  isShowVotingModal: boolean;
  onActionClick?: () => void;
  onClickAwayVotingModal: () => void;
  onCloseVotingModal: () => void;
}
