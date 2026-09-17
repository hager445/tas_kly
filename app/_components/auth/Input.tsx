"use client";

import {
  FieldPath,
  FieldValue,
  FieldValues,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";

import TextError from "./TextError";

export default function Input<T extends FieldValues>({
  label,
  name,
  className,
  type,
  placeholder,
  children,
  requiredBadge,
}: {
  label: FieldPath<T>;
  name: FieldPath<T>;
  className?: string;
  type: "email" | "password" | "text" | "number";
  placeholder: string;
  children?: React.ReactNode;
  requiredBadge?: React.ReactNode;
}) {
  const { register, getFieldState } = useFormContext<T>();
  const { error, isTouched } = getFieldState(name);
  console.log(error);
  console.log(name);

  return (
    <div className="flex flex-col gap-2">
      <label
        className="uppercase text-label-sm font-label-sm text-neutral-medium"
        htmlFor={label}
      >
        {label} {requiredBadge}
      </label>

      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`${isTouched && error?.message ? "border border-error" : "border-none focus:border-0"}  w-full sm:py-3.5 py-4.5 px-4   focus:ring-0 focus:outline-none h-12 bg-surface-highest placeholder:text-placeholder placeholder:text-title-sm placeholder:font-body-md ${className} `}
      />

      <span className="text-neutral-light text-label-sm">{children}</span>
      {isTouched && error && <TextError error={error} name={name} />}
    </div>
  );
}
