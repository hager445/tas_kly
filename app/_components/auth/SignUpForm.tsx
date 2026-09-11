"use client";
import FormContainer from "./FormContainer";
import FormTitle from "./FormTitle";

import Button from "../ui/Button";
import AuthPrompt from "./AuthPrompt";

import InputsGroup from "./SignupInputsGroup";
import {
  SignupFormData,
  validationSchema,
} from "@/app/_lib/schemas/signupValidationSchema";
import { signupAction } from "@/app/actions/auth/signupAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";

export default function SignUpForm() {
  const onSubmit = async (data: SignupFormData) => {
    try {
      const res = await signupAction(data);
      if (res) {
        redirect("/auth/login");
      }
    } catch {}
  };
  const formMethods = useForm<SignupFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onTouched",
  });
  return (
    <FormContainer
      formMethods={formMethods}
      onSubmit={onSubmit}
      formContainerProps={{
        height: "h-auto",
        width: "sm:max-w-[45%] w-full",
        padding: "sm:p-[48px]",
      }}
    >
      <FormTitle
        mainTitle="Create your workspace"
        subTitle="Join the editorial approach to task management."
      />
      <InputsGroup />
      <Button type="submit">Create Account</Button>
      {/* ============ redirect link============= */}
      <AuthPrompt
        to="/auth/login"
        link="Log in"
        text="Already have an account? "
      />
    </FormContainer>
  );
}
