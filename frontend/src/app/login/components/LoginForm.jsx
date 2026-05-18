"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../context/authContext";
import LoginHeader from "./LoginHeader";
import { loginInput } from "../../data/data";
import LoginInput from "./LoginInput";
import Button from "../../../components/ui/Button";
export default function LoginForm() {
  const { setUser } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, password: form.password }),
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-[420px] bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
      <LoginHeader />
      <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
        {loginInput.map((input) => (
          <LoginInput
            key={input.id}
            handleChange={handleChange}
            value={form[input.name]}
            input={input}
          />
        ))}
        {message && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2.5">
            {message}
          </p>
        )}
        <div className="mt-2">
          <Button width="w-full" variant="primary" type="submit">
            Sign in
          </Button>
        </div>
        <p className="text-center text-xs text-stone-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
