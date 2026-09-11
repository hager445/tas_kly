import { cookies } from "next/headers";
import { loginFormData } from "../schemas/loginValidationSchema";
import { SignupFormData } from "../schemas/signupValidationSchema";
type signupDataType = {
  email: string;
  password: string;
  data: {
    name: string;
    department: string;
  };
};
type LoginResponse = {
  access_token: string;
  expires_at: number;
  refresh_token: string;
  rememberMe: boolean;
};
export const signup = async (data: SignupFormData) => {
  const mappedData: signupDataType = {
    email: data.email,
    password: data.password,
    data: { name: data.name, department: data.jobTitle ?? "" },
  };
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/signup`,
    {
      method: "POST",
      headers: {
        apikey: process.env.SECRET_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mappedData),
    },
  );
  const responseData = await req.json();
  if (!req.ok) {
    throw new Error(
      responseData.message || responseData.msg || "Signup failed",
    );
  }
  return responseData;
};
export const login = async (data: loginFormData) => {
  const rememberMe = data.rememberMe;
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/token?grant_type=password`,
    {
      method: "POST",
      headers: {
        apikey: process.env.SECRET_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    },
  );
  const responseData = await req.json();
  if (!req.ok) {
    throw new Error(
      responseData.message ||
        responseData.msg ||
        "Login failed! Invalid email or password ",
    );
  }
  await createCookie(
    "auth_session",
    {
      access_token: responseData.access_token,
      refresh_token: responseData.refresh_token,
      expires_at: responseData.expires_at,
      rememberMe,
    },
    rememberMe ? { maxAge: 60 * 60 * 24 * 30 } : undefined,
  );
  return responseData;
};
export const generateAccessToken = async () => {
  const session = await getCookie();
  if (!session) {
    throw new Error("Session is not Exist!");
  }
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`,
    {
      method: "POST",
      headers: {
        apikey: process.env.SECRET_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: session.refresh_token,
      }),
    },
  );
  const responseData = await req.json();
  if (!req.ok) {
    throw new Error(
      responseData.message || responseData.msg || "Signup failed",
    );
  }
  await createCookie(
    "auth_session",
    {
      access_token: responseData.access_token,
      refresh_token: responseData.refresh_token,
      expires_at: responseData.expires_at,
      rememberMe: session.rememberMe,
    },
    session.rememberMe ? { maxAge: 60 * 60 * 24 * 30 } : undefined,
  );
};
// ===================== HANDLE COOKIES ===========================
const createCookie = async (
  key: string,
  value: LoginResponse,
  persistentValue?: {
    maxAge: number;
  },
) => {
  const cookieStore = await cookies();

  cookieStore.set(key, JSON.stringify(value), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    ...persistentValue,
  });
};
export const getCookie = async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("auth_session");

  return cookie ? JSON.parse(cookie.value) : undefined;
};
export const shouldRefreshAccessToken = async () => {
  const session = await getCookie();
  if (!session) {
    throw new Error("Session is not Exist!");
  }
  const expires_at = session.expires_at * 1000 - 60_000;
  return Date.now() >= expires_at;
};
