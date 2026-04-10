export interface INinModal {
  isShowNinModal: boolean;
  onActionClick?: (nin: string) => void;
  onClickAwayNinModal: () => void;
  onCloseNinModal: () => void;
}

export interface FormValues {
  nin: string;
}
