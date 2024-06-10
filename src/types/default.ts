import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from 'react-hook-form';



export type InputProps = {
    type: string;
    placeholder?: string;
    label?: string;
    id: string;
    value?: string | number | any;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    pattern?: string,
    title?: string,
    widthClass?: string; // Add widthClass prop for customizing width
    register?: UseFormRegisterReturn;
  };
