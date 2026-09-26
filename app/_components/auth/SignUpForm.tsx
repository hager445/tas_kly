"use client";
import FormContainer from "./FormContainer";
import FormTitle from "./FormTitle";

import AuthPrompt from "./AuthPrompt";

import InputsGroup from "./SignupInputsGroup";
import {
  SignupFormData,
  validationSchema,
} from "@/app/_lib/schemas/signupValidationSchema";
import { signupAction } from "@/app/actions/auth/signupAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpForm() {
  const onSubmit = async (data: SignupFormData) => {
    try {
      await signupAction(data);
    } catch (error) {
      throw error;
    }
  };
  const formMethods = useForm<SignupFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onTouched",
  });

  return (
    <FormContainer
      formMethods={formMethods}
      onSubmit={onSubmit}
      variant="signup"
    >
      <div className="w-full pb-10 pt-8 sm:pt-0 sm:text-nowrap text-center items-center gap-2">
        <FormTitle
          variant="authTitle"
          mainTitle="Create your workspace"
          subTitle="Join the editorial approach to task management."
        />
      </div>
      <InputsGroup />

      {/* ============ redirect link============= */}
      <AuthPrompt
        to="/auth/login"
        link="Log in"
        text="Already have an account? "
      />
    </FormContainer>
  );
}
