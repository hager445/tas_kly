"use client";
import Input from "./Input";
import ValidationHints from "./ValidationHints";
import { useFormContext, UseFormWatch } from "react-hook-form";
import { SignupFormData } from "@/app/_lib/schemas/signupValidationSchema";
import PasswordInput from "./PasswordInput";

export default function InputsGroup() {
  const { watch } = useFormContext();

  return (
    <div className="w-full flex flex-col gap-y-6 mb-4">
      {/* ===========title============= */}
      {/* ==================== inputs=========================== */}
      <Input
        inputWidth="sm:w-120 w-full"
        label="name"
        type="text"
        placeholder="enter your full name"
      >
        3-50 characters, letters only.
      </Input>
      <Input
        inputWidth="sm:w-120 w-full"
        label="email"
        type="email"
        placeholder="enter your email address"
      />
      <Input
        inputWidth="sm:w-120 w-full"
        label="job title"
        name="jobTitle"
        type="text"
        placeholder="enter your job title"
      />
      <div className="w-full sm:w-120 flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row sm:gap-x-1 sm:justify-between">
        <PasswordInput />
        <Input
          inputWidth=" w-full"
          label="confirm password"
          name="confirmPassword"
          type="password"
          placeholder="confirm your password"
        />
      </div>
      <ValidationHints watch={watch as UseFormWatch<SignupFormData>} />
      {/* ================= submit button=========================== */}
    </div>
  );
}
