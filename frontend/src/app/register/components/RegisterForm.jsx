"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../../../components/Logo/Logo";
export default function RegisterForm() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        },
      );
      const data = await res.json();
      if (res.ok) {
        setMessage("User created successfully");
        router.push("/login");
        console.log("User created");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Something went wrong");
    }
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="border-2 border-stone-300 p-12 rounded-md">
          <form onSubmit={handleSubmit} className="w-100 flex flex-col gap-5">
            <div className="flex items-center py-3 justify-between">
              <Link href="/">
                <Logo />
              </Link>
              <span className="flex gap-1 font-medium  text-sm">
                <span className="text-stone-600">Already have an account?</span>
                <Link
                  className="text-indigo-500 hover:text-indigo-600"
                  href="/login"
                >
                  Sign in
                </Link>
              </span>
            </div>
            <h3 className="font-medium text-2xl py-2">
              Easily gather, track, and manage user feedback
            </h3>
            <input
              className="border-2 border-stone-300  border p-[6px] rounded-md"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              type="text"
              name="username"
              placeholder="Name"
              required
            />
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
