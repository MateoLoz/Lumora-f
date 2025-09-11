import axios from "axios";
import { API_URL } from "@/lib/config";
import type { UserDto } from "@/types/user.type";

export async function login(data: UserDto) {
  if (!API_URL) throw new Error("API_URL is not defined");
  if (!data.email) throw new Error("missing params email");
  if (!data.password) throw new Error("missing params password");
  const response = await axios.post(`${API_URL}auth/login`, data);
  if (response.status != 200) throw new Error(`auth microservice error ${response.status}`);
  return response.data;
}
