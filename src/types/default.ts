import { ChangeEvent } from "react";

export type InputProps = {
    type: string;
    placeholder: string;
    label?: string;
    id: string;
    value: string | number | any;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    pattern?: string,
    title?: string,
    widthClass?: string; // Add widthClass prop for customizing width
  };