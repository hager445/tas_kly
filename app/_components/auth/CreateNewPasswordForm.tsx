"use client";
import {
  createNewPasswordSchema,
  newPasswordFormData,
} from "@/app/_lib/schemas/createNewPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "./FormContainer";
import FormTitle from "./FormTitle";
import { forgotPasswordAction } from "@/app/actions/auth/forgotPasswordAction";
import { createNewPasswordAction } from "@/app/actions/auth/createNewPasswordAction";
import CreateNewPasswordInputs from "./CreateNewPasswordInputs";

export default function CreateNewPasswordForm() {
  const [failedMessage, setFailedMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formMethods = useForm<newPasswordFormData>({
    resolver: zodResolver(createNewPasswordSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: newPasswordFormData) => {
    try {
      const res = await createNewPasswordAction(data);
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
        variant="createNewPassword"
      >
        {" "}
        <FormTitle
          className="mr-auto"
          variant="authTitle"
          mainTitle="Create a New Password"
          subTitle="Create a new, strong password to secure your workstation
access."
        />
        <CreateNewPasswordInputs />
        {/* ==================== */}
      </FormContainer>
    </>
  );
}
