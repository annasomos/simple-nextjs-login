"use client";

import { HTMLInputTypeAttribute } from "react";

export interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  setValue: (name: string) => void;
  isRequired: boolean;
  type?: HTMLInputTypeAttribute;
  placeholderText?: string;
}

export default function InputField({
  name,
  value,
  setValue,
  isRequired,
  type,
  label,
  placeholderText,
}: InputFieldProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="flex flex-col gap-2 w-full appearance-none">
      <label
        htmlFor={name}
        className="text-md 2xl:text-2xl mb-1 text-white font-semibold"
      >
        {label + (isRequired ? " *" : "")}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholderText}
        required={isRequired}
        onChange={handleChange}
        className="border w-full text-white border-gray-400 focus:border-brand-blue px-3 py-2 bg-foreground outline-none focus:shadow-[0_0_3px_1px_#91d6e5] focus:user-invalid:shadow-[0_0_3px_1px_red] focus:user-invalid:border-red-500 transition-shadow user-invalid:shadow-none user-invalid:border-red-500 user-invalid:bg-red-300"
      />
    </div>
  );
}
