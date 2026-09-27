import React from "react";
import Button from "../ui/Button";
import Link from "next/link";
import BarIcon from "../ui/BarIcon";
import Input from "./Input";
import { forgotPasswordFormData } from "@/app/_lib/schemas/forgotPasswordSchema";
import { useFormContext } from "react-hook-form";

export default function ForgotPasswordInputs() {
  const {
    watch,
    formState: { isSubmitting },
  } = useFormContext<forgotPasswordFormData>();
  return (
    <div className="pt-7 flex flex-col gap-6 items-center w-full">
      <Input
        className="w-full rounded-md "
        label="email address"
        name="email"
        type="email"
        placeholder="enter your email"
      />
      {/* ========= */}
      <Button
        disabled={isSubmitting}
        className="primary-button rounded-4"
        type="submit"
      >
        {isSubmitting ? "Sending Link..." : "Send Reset Link"}
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
