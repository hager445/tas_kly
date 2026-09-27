"use client";

import { formVariants } from "@/app/_lib/variants/formVariants";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

export default function FormContainer<T extends FieldValues>({
  formMethods,
  onSubmit,
  variant,
  children,
}: {
  formMethods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  variant?:
    "signup" | "login" | "project" | "forgotPassword" | "createNewPassword";
  children: React.ReactNode;
}) {
  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, (errors) => {
          console.log("VALIDATION ERRORS:", errors);
        })}
        className={`flex flex-col items-center gap-1   bg-white rounded-8 border-1 border-neutral-light/30
          ${variant ? formVariants[variant] : ""}
         `}
      >
        {children}
      </form>
    </FormProvider>
  );
}
