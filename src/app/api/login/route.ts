import { NextResponse } from "next/server";
import { login } from "@/services/auth.service";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await login(body);

  const { token } = await res;

  const response = NextResponse.json({ success: true });
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}
