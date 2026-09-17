import { getSession } from "../../helpers/getSession";
import { newProjectFormData } from "../../schemas/createProjectValidationSchema";

export const createNewProject = async (data: newProjectFormData) => {
  const session = await getSession();
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/projects`,
    {
      method: "POST",

      headers: {
        apikey: process.env.SECRET_KEY!,
        "Content-Type": "application/json",
        Prefer: "return=representation",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(data),
    },
  );
  const responseData = await req.json();
  if (!req.ok) {
    console.log(!req.ok);

    throw new Error(
      responseData?.message ||
        responseData?.msg ||
        "Failed To Add New Project, Try Again Later",
    );
  }
  return responseData;
};
export const getProjects = async () => {
  const session = await getSession();
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/get_projects`,
    {
      method: "GET",

      headers: {
        apikey: process.env.SECRET_KEY!,
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
    },
  );
  const responseData = await req.json();
  if (!req.ok) {
    console.log(!req.ok);
    throw new Error(
      responseData?.message ||
        responseData?.msg ||
        "Failed To Fetch Projects, Somthing went wrong",
    );
  }
  return responseData;
};
