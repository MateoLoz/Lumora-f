import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  console.log("Middleware corriendo en:", req.nextUrl.pathname);
  const token = req.cookies.get("access_token")?.value;
  console.log("TOKEN:", token);

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  try {
    await jwtVerify(
      token,
      new TextEncoder().encode(process.env.ACCESS_TOKEN || "clave_test")
    );
    return NextResponse.next();
  } catch (err) {
    console.error("JWT inválido:", err);
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"], // protegemos dashboard
};
