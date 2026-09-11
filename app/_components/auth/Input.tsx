"use client";

import React, { useRef, useState } from "react";
import { FieldErrors, FieldValues, useFormContext } from "react-hook-form";
import ValidationHints from "./ValidationHints";
import { validationSchema } from "@/app/_lib/schemas/signupValidationSchema";
import InputValidationError from "./TextError";

export default function Input({
  label,
  name = label,
  inputWidth,
  type,
  placeholder,
  icon,
  children,
}: {
  label: string;
  name?: string;
  inputWidth?: string;
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <label
        className="uppercase text-label-sm font-label-sm text-neutral-medium"
        htmlFor={label}
      >
        {label}
      </label>
      {/* <div className="relative"> */}
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`${touchedFields[name] && errors[name]?.message ? "border border-error" : "border-none focus:border-0"} sm:py-3.5 py-4.5 px-4   focus:ring-0 focus:outline-none rounded-md ${inputWidth || "full"} h-12 bg-surface-highest placeholder:text-placeholder placeholder:text-title-sm placeholder:font-body-md`}
      />

      <span className="text-neutral-light text-label-sm">{children}</span>
      {errors && <InputValidationError errors={errors} name={name} />}
    </div>
  );
}
