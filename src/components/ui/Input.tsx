import { FieldValues } from 'react-hook-form';
import { InputProps } from "@/types/default";

const Input = <T extends FieldValues>({
  type,
  placeholder,
  label,
  id,
  value,
  onChange,
  pattern,
  title,
  widthClass = 'w-full',
  register,
  name,
  required,
}: InputProps<T>) => {
  return (
    <main className="flex flex-col gap-y-1 text-xs sm:text-sm xl:text-base">
      <label className="cursor-pointer" htmlFor={id}>
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        pattern={pattern}
        title={title}
        className={`bg-lightOrange px-2 xl:px-4 py-3 border duration-500 focus:border-primary focus:outline-none ${widthClass}`}
        required={required}
      />
    </main>
  );
};


export default Input;
