import { FieldValues, UseFormRegister, Path } from 'react-hook-form';


export type InputProps<T extends FieldValues> = {
  type: string;
  placeholder?: string;
  label?: string;
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  title?: string;
  widthClass?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  required?: boolean;
}