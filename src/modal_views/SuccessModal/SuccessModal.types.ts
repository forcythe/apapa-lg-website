export interface ISuccessModal {
  headText?: string;
  subText?: string;
  copyText?: string;
  isShowSuccessModal: boolean;
  actionBtnTitle?: string;
  showOutlineBtn?: boolean;
  onActionClick?: () => void;
  onClickAwaySuccessModal: () => void;
  onCloseSuccessModal: () => void;
}
