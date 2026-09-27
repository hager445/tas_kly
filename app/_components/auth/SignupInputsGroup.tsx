"use client";
import Input from "./Input";
import ValidationHints from "./ValidationHints";
import { useFormContext } from "react-hook-form";
import { SignupFormData } from "@/app/_lib/schemas/signupValidationSchema";
import PasswordInput from "./PasswordInput";
import Button from "../ui/Button";

export default function InputsGroup() {
  const {
    watch,
    formState: { isSubmitting },
  } = useFormContext<SignupFormData>();
  return (
    <>
      <div className="w-full flex flex-col gap-y-6 mb-4">
        {/* ===========title============= */}
        {/* ==================== inputs=========================== */}
        <Input
          className="w-full rounded-md "
          label="name"
          name="name"
          type="text"
          placeholder="enter your full name"
        >
          3-50 characters, letters only.
        </Input>
        <Input
          className="w-full rounded-md "
          label="email"
          name="email"
          type="email"
          placeholder="enter your email address"
        />
        <Input
          className="w-full rounded-md "
          label="job title"
          name="jobTitle"
          type="text"
          placeholder="enter your job title"
        />
        <div className="w-full flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row sm:gap-x-1 sm:justify-between">
          <div className="sm:w-1/2 w-full">
            <PasswordInput />
          </div>
          <div className="sm:w-1/2 w-full">
            {" "}
            <Input
              className="w-full rounded-md "
              label="confirm password"
              name="confirmPassword"
              type="password"
              placeholder="confirm your password"
            />
          </div>
        </div>
        <ValidationHints watch={watch} />
        {/* ================= submit button=========================== */}
      </div>
      <Button disabled={isSubmitting} className="primary-button" type="submit">
        {isSubmitting ? "Creating..." : "Create Account"}
      </Button>
    </>
  );
}
