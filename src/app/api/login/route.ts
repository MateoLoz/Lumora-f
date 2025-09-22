import { NextResponse } from "next/server";
import { login } from "@/services/auth.service";
import axios from "axios";

export async function POST(req: Request) {
  try {
  const body = await req.json();

  const res = await login(body);
  
  const { accessToken } = await res;


  const response = NextResponse.json({ success: true });
  response.cookies.set("access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return response;
} catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message =
        error.response?.data?.message ||
        error.message ||
        "Error en el servicio de autenticación";

      return NextResponse.json(
        { success: false, error: message },
        { status }
      );
    }

    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
}
}
