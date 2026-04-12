"use client";
import { useState } from "react";
import { GoInfo } from "react-icons/go";
import PasswordInput from "./PasswordInput";
import SecurityHeader from "./SecurityHeader";
import { useRouter } from "next/navigation";
import Button from "../../../../../components/ui/Button";
import usePasswordForm from "../../../../hooks/usePasswordForm";
import { passwordInfo } from "../../../../data/data";

export default function UpdatePassword() {
  const form = usePasswordForm();
  const { password, setPassword } = form;

  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (password.new !== password.confirm) {
        return setMessage("Passwords not match!");
      }

      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/password/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            password: password.current,
            newpassword: password.new,
            confirmpassword: password.confirm,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessage(data.success);

      setPassword({
        current: "",
        new: "",
        confirm: "",
      });

      setTimeout(() => {
        logoutUser();
      }, 1500);
    } catch (err) {
      setMessage(err.message);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="max-w-xl">
      <div className="flex flex-col gap-6 border-2 border-stone-200 p-6 rounded-md">
        <SecurityHeader />

        <form onSubmit={handleUpdatePassword} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-6">
            {passwordInfo.map((input) => (
              <PasswordInput
                key={input.name}
                passwordInput={input}
                form={form}
              />
            ))}
          </div>

          <p className="flex gap-2 items-center text-xs text-blue-600 bg-blue-100 mt-2 p-3 rounded-md">
            <GoInfo size={18} />
            After saving, you will be logged out of all other devices and
            sessions for security.
          </p>

          <p className="text-sm font-medium text-rose-500">
            {message && message}
          </p>

          <Button width="w-25" variant="secondary" type="submit">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
}
