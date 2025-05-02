export interface FileInputFieldProps {
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  selectedFile?: File | null;
  infoText?: string;
  setSelectedFile?: React.Dispatch<React.SetStateAction<File | null>>;
  name: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
