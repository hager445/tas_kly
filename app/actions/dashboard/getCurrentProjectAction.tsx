"use server";

import { getProjectByID } from "@/app/_lib/dashboard/projects/data-service";

export async function getCurrentProjectAction(project_id: string) {
  try {
    const res = await getProjectByID(project_id);
    return res;
  } catch (error) {
    throw error;
  }
}
