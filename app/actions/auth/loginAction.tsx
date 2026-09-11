"use server";
import { login } from "@/app/_lib/auth/data-service";
import { loginFormData } from "@/app/_lib/schemas/loginValidationSchema";
import { redirect } from "next/navigation";

export async function loginAction(formData: loginFormData) {
  await login(formData);

  redirect("/projects");
}
