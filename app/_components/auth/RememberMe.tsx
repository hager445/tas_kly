"use client";

import { useFormContext } from "react-hook-form";

export default function RememberMe() {
  const { register } = useFormContext();

  return (
    <div className="flex gap-2 items-center">
      <input
        {...register("rememberMe")}
        className="cursor-pointer accent-neutral-light rounded-2 h-4 w-4   hover:border-primary
    checked:bg-primary
    checked:border-primary
    focus:outline-none
    focus:ring-0"
        type="checkbox"
      />
      <span className="text-body-md font-title-sm text-placeholder-dark">
        Remember Me
      </span>
    </div>
  );
}
