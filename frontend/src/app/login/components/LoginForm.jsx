"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "../../../components/Logo/Logo";
import { useAuth } from "../../context/authContext";
export default function LoginForm() {
  const { setUser } = useAuth();
  const router = useRouter();
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        setUser(data);
        router.push("/dashboard/create-feedback");
        setMessage("Login successfull");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="border-2 border-stone-300 p-12 rounded-md">
          <form className="w-100 flex flex-col gap-5" onSubmit={handleSubmit}>
            <Link href="/">
              <Logo />
            </Link>
            <h3 className="font-medium text-xl">Log in to your account</h3>
            <input
              className="border-2 border-stone-300  border p-[6px] rounded-md"
              onChange={(e) => setMail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="border-2 border-stone-300 p-[6px] rounded-md"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p className="text-red-600 font medium">{message && message}</p>
            <button
              className="w-30 text-stone-50 bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-md cursor-pointer"
              type="submit"
            >
              Login
            </button>
            <Link
              href="/register"
              className="text-sm font-medium text-center mt-4 text-stone-600 hover:text-stone-700"
            >
              Don't have an account? Sign up
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
