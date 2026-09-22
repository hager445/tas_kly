"use server";
import { login } from "@/app/_lib/auth/data-service";
import { loginFormData } from "@/app/_lib/schemas/loginValidationSchema";
import { redirect } from "next/navigation";

export async function loginAction(formData: loginFormData) {
  try {
    await login(formData);
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Login failed, please try again.",
    };
  }
  redirect("/dashboard/projects");
}
