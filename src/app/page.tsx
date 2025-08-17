"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="font-sans flex flex-row gap-2 bg-white min-h-screen p-4 pb-20 gap-16 sm:p-4">
      <button onClick={() => router.push("/dashboard")}>Dashboard</button>
      <button>Login</button>
      <button>Register</button>
    </div>
  );
}
