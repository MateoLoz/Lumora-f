import axios from 'axios';
import { API_URL } from "@/lib/config";
import { UserDto } from "@/types/user.type";

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function postUser(data : UserDto) {

    const res = await axios.post(`${API_URL}users/createAccount`, data )
    if (res.status !== 201) throw new Error("Failed to fetch users");
    return res.data;
}