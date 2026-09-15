"use client";
import FormContainer from "./FormContainer";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTitle from "./FormTitle";
import Input from "./Input";
import Button from "../ui/Button";
import AuthPrompt from "./AuthPrompt";
import {
  loginFormData,
  loginValidationSchema,
} from "@/app/_lib/schemas/loginValidationSchema";
import { loginAction } from "@/app/actions/auth/loginAction";
import RememberMe from "./RememberMe";
import Link from "next/link";
import PasswordInput from "./PasswordInput";
import TextError from "./TextError";
import { useState } from "react";

export default function LoginForm() {
  const [errorMsg, setErrorMsg] = useState("");
  const onSubmit = async (data: loginFormData) => {
    try {
      const result = await loginAction(data);
      if (result && !result.success) {
        setErrorMsg(result.message);
      }
    } catch (error) {
      throw error;
    }
  };
  const formMethods = useForm({
    resolver: zodResolver(loginValidationSchema),
    mode: "onTouched",
  });
  return (
    <FormContainer
      formMethods={formMethods}
      onSubmit={onSubmit}
      formContainerProps={{
        height: "h-auto",
        width: "sm:max-w-[576px] w-full",
        padding: "sm:p-[48px]",
      }}
    >
      <FormTitle
        mainTitle="Welcome Back"
        subTitle="Please enter your details to access your workspace"
      />
      <div className="flex flex-col gap-6">
        <Input
          inputWidth="sm:w-120 w-full"
          label="email"
          type="email"
          placeholder="enter your email address"
        />
        <PasswordInput />
        <div className="flex justify-between items-center py-2">
          <RememberMe />
          <Link
            className={`text-primary text-body-md font-title-sm hover:underline`}
            href="/auth/forgotPassword"
          >
            Forgot Password?
          </Link>
        </div>
        <Button style="primary-button" type="submit">
          Log In
        </Button>
        {/* =========SERVER ERROR DISPLAY=========== */}
        <TextError serverError={errorMsg} />
        {/* ============ redirect link============= */}
        <AuthPrompt
          to="/auth/signup"
          link="Sign Up"
          text="Don't have an account? "
        />
      </div>
    </FormContainer>
  );
}
