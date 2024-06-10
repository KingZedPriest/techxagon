import { InputProps } from "@/types/default";

const Input = ({ type, placeholder, label, id, value, onChange, pattern, title, widthClass = "w-full", register }: InputProps) => {
  return (
    <main className="flex flex-col gap-y-1 text-xs sm:text-sm xl:text-base">
      <label className="cursor-pointer" htmlFor={id}>
        {label}
      </label>
      <input
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e)}
        value={value}
        name={id}
        id={id}
        title={title}
        pattern={pattern}
        type={type}
        placeholder={placeholder}
        className={`bg-lightOrange px-2 xl:px-4 py-3 border duration-500 focus:border-primary focus:outline-none ${widthClass}`}
        {...register}
      />
    </main>
  );
};

export default Input;
