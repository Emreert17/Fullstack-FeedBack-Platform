"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterHeader from "./RegisterHeader";
import { registerInput } from "../../data/data";
import RegisterInput from "./RegisterInput";
import Button from "../../../components/ui/Button";
import { handleRegister } from "../../services/authService";

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await handleRegister({
        username: form.username,
        email: form.email,
        password: form.password,
      });

      setMessage("User created successfully");
      router.push("/login");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full max-w-[420px] bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
      <RegisterHeader />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        {registerInput.map((input) => (
          <RegisterInput
            handleChange={handleChange}
            value={form[input.name]}
            key={input.id}
            input={input}
          />
        ))}
        {message && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2.5">
            {message}
          </p>
        )}
        <div className="mt-2">
          <Button variant="primary" type="submit" width="w-full">
            Create account
          </Button>
        </div>
      </form>
    </div>
  );
}
