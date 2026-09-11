"use server";

import { signup } from "@/app/_lib/auth/data-service";
import { SignupFormData } from "@/app/_lib/schemas/signupValidationSchema";

export async function signupAction(formData: SignupFormData) {
  try {
    const data = await signup(formData);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
}
