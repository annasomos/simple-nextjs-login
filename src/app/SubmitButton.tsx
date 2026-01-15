"use client";

export interface SubmitButtonProps {
  disabled: boolean;
  label: string;
}

export default function SubmitButton({ disabled, label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full cursor-pointer text-xl 2xl:text-2xl font-semibold bg-[linear-gradient(90deg,#6793AE_0%,#52A5B8_97.99%)] text-white py-2 xl:py-3 2xl:py-4 disabled:opacity-50 disabled:cursor-default"
    >
      {label}
    </button>
  );
}
