import { NextRequest, NextResponse } from "next/server";
import { generateAccessToken } from "./app/_lib/auth/data-service";

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const cookie = req.cookies.get("auth_session");
  const pathname = req.nextUrl.pathname;

  if (!pathname.startsWith("/auth") && !cookie) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (!cookie) {
    return;
  }
  const session = JSON.parse(cookie.value);

  if (!session) {
    throw new Error("Session is not Exist!");
  }
  const expires_at = session.expires_at * 1000 - 60_000;
  if (Date.now() >= expires_at) {
    console.log(Date.now() >= expires_at);

    const data = await generateAccessToken(session);
    res.cookies.set(
      "auth_session",
      JSON.stringify({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: data.expires_at,
        rememberMe: session.rememberMe,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        ...(session.rememberMe ? { maxAge: 60 * 60 * 24 * 30 } : {}),
      },
    );
  }
  return res;
}
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|css|ico)$).*)",
  ],
};
