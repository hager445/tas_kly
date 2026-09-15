"use server";
import { getUser } from "@/app/_lib/auth/data-service";
export default async function userAction() {
  const user = await getUser();
  return user;
}
