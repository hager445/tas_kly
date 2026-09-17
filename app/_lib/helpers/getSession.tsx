import { cookies } from "next/headers";

const getCookie = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("auth_session");
  console.log("cookie", cookie?.value || "");

  return cookie ? JSON.parse(cookie.value) : undefined;
};
export const getSession = async () => {
  const session = await getCookie();

  if (!session) {
    throw new Error("Session does not exist");
  }
  return session;
};
