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
  variant?: "signup" | "login" | "project";
  children: React.ReactNode;
}) {
  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, (errors) => {
          console.log("VALIDATION ERRORS:", errors);
        })}
        className={`flex flex-col  items-center gap-1 bg-white rounded-8  
          ${variant ? formVariants[variant] : ""}
         pb-18.5 `}
      >
        {children}
      </form>
    </FormProvider>
  );
}
