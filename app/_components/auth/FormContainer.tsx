"use client";
import {
  SignupFormData,
  validationSchema,
} from "@/app/_lib/schemas/signupValidationSchema";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
type FormContainerProps = {
  width?: string;
  height?: string;
  padding?: string;
};
export default function FormContainer({
  formMethods,
  onSubmit,
  formContainerProps,
  children,
}: {
  formMethods: any;
  onSubmit: any;
  formContainerProps?: FormContainerProps;
  children: React.ReactNode;
}) {
  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className={`flex flex-col  items-center gap-1 bg-white rounded-8 ${formContainerProps?.width ? `${formContainerProps.width}` : ""} ${formContainerProps?.height ? `${formContainerProps.height}` : ""} ${formContainerProps?.padding ? `${formContainerProps.padding}` : ""} pb-[74px] px-6`}
      >
        {children}
      </form>
    </FormProvider>
  );
}
