"use server";

import { editCurrentProject } from "@/app/_lib/dashboard/projects/data-service";
import { projectFormData } from "@/app/_lib/schemas/projectValidationFormSchema";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

export async function editCurrentProjectAction(
  formData: projectFormData,
  project_id: string,
  currentPage: number,
) {
  try {
    await editCurrentProject(formData, project_id);
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Editing current project failed, please try again.",
    };
  }
  revalidatePath(`/dashboard/projects?page=${currentPage}`);
  redirect(`/dashboard/projects?page=${currentPage}`);
}
