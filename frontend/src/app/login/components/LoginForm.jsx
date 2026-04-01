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
    <>
      <div className="w-120 flex flex-col gap-5 border-2 border-stone-300 p-12 rounded-lg shadow-xl">
        <LoginHeader />
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {loginInput.map((input) => (
            <LoginInput
              key={input.id}
              handleChange={handleChange}
              value={form[input.name]}
              input={input}
            />
          ))}
          <p className="text-red-600 font medium">{message && message}</p>
          <Button width="w-full" variant="primary" type="submit">
            Login
          </Button>
          <Link
            href="/register"
            className="text-xs font-medium text-center mt-3 text-stone-600 hover:text-stone-700"
          >
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </>
  );
}
