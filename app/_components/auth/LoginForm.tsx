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
  const [isLoading, setIsLoading] = useState(false);

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
      variant="login"
    >
      <div className="w-full pb-10 pt-8 sm:pt-0 sm:text-nowrap  text-center items-center gap-2">
        <FormTitle
          variant="authTitle"
          mainTitle="Welcome Back"
          subTitle="Please enter your details to access your workspace"
        />
      </div>
      <div className="flex flex-col gap-6">
        <Input
          className="sm:w-120 w-full rounded-md "
          label="email"
          name="email"
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
        <Button disabled={false} className="primary-button" type="submit">
          Log In
        </Button>
        {/* =========SERVER ERROR DISPLAY=========== */}
        <TextError errorMessage={errorMsg} />
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
