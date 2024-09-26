"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login(): JSX.Element {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const Login = () => {
    if (id === "" || password === "") alert("write ur id or password");
    else router.push("/homepage");
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input
          placeholder="id"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={Login}>LOGIN</button>
      </div>
      <div>
        <Link href="/">Back to Main Page</Link>
      </div>
      <div>
        <Link href="/sign-up">Go to Sign up</Link>
      </div>
    </div>
  );
}
