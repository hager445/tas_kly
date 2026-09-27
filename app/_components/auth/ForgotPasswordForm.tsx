"use client";
import FormContainer from "./FormContainer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordFormData,
  forgotPasswordSchema,
} from "@/app/_lib/schemas/forgotPasswordSchema";
import FormTitle from "./FormTitle";
import Input from "./Input";
import Button from "../ui/Button";

import BarIcon from "../ui/BarIcon";
import Link from "next/link";
import { useState } from "react";
import { forgotPasswordAction } from "@/app/actions/auth/forgotPasswordAction";
import SuccessToastr from "../ui/SuccessToastr";
import SuccessMessage from "../ui/SuccessMessage";
import ResendEmailButton from "../ui/ResendEmailButton";
import ForgotPasswordInputs from "./ForgotPasswordInputs";

export default function ForgotPasswordForm() {
  const [failedMessage, setFailedMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formMethods = useForm<forgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: forgotPasswordFormData) => {
    try {
      const res = await forgotPasswordAction(data);
      console.log(res);
      if (res && !res.success) {
        if (res.message) setFailedMessage(res.message);
        return;
      }
      setShowSuccessMessage(true);
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <FormContainer
        formMethods={formMethods}
        onSubmit={onSubmit}
        variant="forgotPassword"
      >
        {" "}
        <FormTitle
          className="mr-auto"
          variant="authTitle"
          mainTitle="Forgot password?"
          subTitle="No worries, we'll send you reset instructions."
        />
        {/* ==================== */}
        <ForgotPasswordInputs />
      </FormContainer>

      {showSuccessMessage && (
        <SuccessToastr className="w-[35%]">
          <SuccessMessage />
          <ResendEmailButton />
        </SuccessToastr>
      )}
    </>
  );
}
