import { Poll } from "@/screens/pollsAndSurvey/pollsAndSurvey.types";

export interface IVotingModal {
  poll?: Poll;
  isShowVotingModal: boolean;
  onActionClick?: () => void;
  onClickAwayVotingModal: () => void;
  onCloseVotingModal: () => void;
}
