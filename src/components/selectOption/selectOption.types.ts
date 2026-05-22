export interface Option {
  id: number;
  title: string;
}

export interface SelectOptionProps {
  label: string;
  name: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
  error?: string;
  options: Option[];
  t?: (key: string) => string;
}
