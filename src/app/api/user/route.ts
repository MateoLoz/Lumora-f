import { NextResponse } from "next/server";
import { toUserDto } from "@/utils/user.mapper";
import { postUser } from "@/services/user.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userDto = toUserDto(body);

    const response = await postUser(userDto); 
    return NextResponse.json(response, { status: 201 });
  } catch (err: any) {
    console.error("Error en /api/user:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}