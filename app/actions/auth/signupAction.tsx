"use server";

import { signup } from "@/app/_lib/auth/data-service";
import { SignupFormData } from "@/app/_lib/schemas/signupValidationSchema";
import { redirect } from "next/navigation";

export async function signupAction(formData: SignupFormData) {
  try {
    await signup(formData);
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Sign up failed, please try again.",
    };
  }
  redirect("/auth/login");
}
