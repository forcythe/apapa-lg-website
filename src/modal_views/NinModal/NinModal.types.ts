export interface INinModal {
  isShowNinModal: boolean;
  onActionClick?: () => void;
  onClickAwayNinModal: () => void;
  onCloseNinModal: () => void;
}

export interface FormValues {
  nin: string;
}
