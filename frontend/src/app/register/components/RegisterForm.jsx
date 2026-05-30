"use client";

import RegisterHeader from "./RegisterHeader";
import { registerInput } from "../../data/auth/register";
import RegisterInput from "./RegisterInput";
import Button from "../../../components/ui/Button";
import { useRegister } from "../../hooks/auth/useRegister";

export default function RegisterForm() {
  const { message, form, handleSubmit, setForm } = useRegister();

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
