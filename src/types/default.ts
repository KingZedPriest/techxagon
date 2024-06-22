import { FieldValues, UseFormRegister, Path } from 'react-hook-form';

//For the input field
export type InputProps<T extends FieldValues> = {
  type: string;
  placeholder?: string;
  label?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  title?: string;
  widthClass?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  required?: boolean;
  otherClass?: string;
}

//For the logged in user details
export type UserDetails = {
  id: string;
  name?: string;
  email: string;
  exams?: [];
  hashedPassword: string;
  role: string;
  suspended?: boolean;
  deleted?: boolean;
  schoolId?: string;
  createdAt: string;
  updatedAt: string;
  iat: number;
}

//For the Schools
export type School = {
  id: string;
  name: string;
  schoolLogo?: string;
  location?: string;
  motto?: string;
  teachers?: any[],
  students?: any[]
}

//For the Teachers
export type Teacher = {
  id: string;
  name: string;
  email: string;
  exams?: any[];
  hashedPassword: string;
  role: string;
  suspended: boolean;
  deleted: boolean;
  school?: any;
  schoolId?: string;
}