"use server";

import { logout } from "@/app/_lib/auth/data-service";
import { redirect } from "next/navigation";
export default async function logoutAction() {
  try {
    await logout();
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Logout failed, please try again.",
    };
  }
  redirect("/auth/login");
}
