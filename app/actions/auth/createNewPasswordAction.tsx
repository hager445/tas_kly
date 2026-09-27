"use server";
import { createNewPassword } from "@/app/_lib/auth/data-service";
import { newPasswordFormData } from "@/app/_lib/schemas/createNewPasswordSchema";

export async function createNewPasswordAction(formData: newPasswordFormData) {
  try {
    const res = await createNewPassword(formData);
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
          : "Creating New Password failed, please try again.",
    };
  }
}
