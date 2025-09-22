import axios from "axios";
import { API_URL } from "@/lib/config";
import type { UserDto } from "@/types/user.type";

export async function login(data: UserDto) {
  if (!API_URL) throw new Error("API_URL is not defined");
  const response = await axios.post(`${API_URL}auth/login`, data);
  return response.data;
}
