"use server";
import { forgotPassword, login } from "@/app/_lib/auth/data-service";
import { forgotPasswordFormData } from "@/app/_lib/schemas/forgotPasswordSchema";
import { loginFormData } from "@/app/_lib/schemas/loginValidationSchema";
import { redirect } from "next/navigation";

export async function forgotPasswordAction(formData: forgotPasswordFormData) {
  try {
    const res = await forgotPassword(formData);
    return {
      success: true,
      data: res,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Sending your email failed, please try again.",
    };
  }
}
