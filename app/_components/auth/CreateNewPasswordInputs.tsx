import { newPasswordFormData } from "@/app/_lib/schemas/createNewPasswordSchema";
import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import Button from "../ui/Button";
import Link from "next/link";
import BarIcon from "../ui/BarIcon";
import ValidationHints from "./ValidationHints";

export default function CreateNewPasswordInputs() {
  const {
    watch,
    formState: { isSubmitting },
  } = useFormContext<newPasswordFormData>();
  return (
    <div className="pt-7 flex flex-col gap-6 items-center w-full">
      {/* <div className="w-full flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row sm:gap-x-1 sm:justify-between"> */}
      <PasswordInput inputClassName="bg-surface-low border-1 border-neutral-light/30  rounded-2" />

      <Input
        className="w-full  bg-surface-low border-1 border-neutral-light/30 rounded-2"
        label="confirm password"
        name="confirmPassword"
        type="password"
        placeholder="confirm your password"
      />
      {/* </div> */}

      {/* ====hints */}
      <ValidationHints watch={watch} className="bg-surface-low" />
      {/* ========= */}
      <Button
        disabled={isSubmitting}
        className="primary-button rounded-4"
        type="submit"
      >
        {isSubmitting ? "Updating..." : "Update Password"}
      </Button>
      {/* =============================== */}
      <Link
        className="text-primary flex items-center gap-0.75"
        href={"/auth/login"}
      >
        <BarIcon iconName="ArrowRightBlue" width={16} height={16} />
        <span> Back To Log In</span>
      </Link>
    </div>
  );
}
