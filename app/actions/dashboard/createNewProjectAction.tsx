"use server";

import { createNewProject } from "@/app/_lib/dashboard/projects/data-service";
import { newProjectFormData } from "@/app/_lib/schemas/createProjectValidationSchema";
import { redirect } from "next/navigation";

export async function createNewProjectAction(formData: newProjectFormData) {
  try {
    await createNewProject(formData);
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "create new project failed, please try again.",
    };
  }

  redirect("/dashboard/projects");
}
