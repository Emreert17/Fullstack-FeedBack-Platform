"use client";
import { useState } from "react";
import { GoInfo } from "react-icons/go";
import PasswordInput from "./PasswordInput";
import SecurityHeader from "./SecurityHeader";
import usePasswordForm from "../../../../hooks/usePasswordForm";
import { useRouter } from "next/navigation";
import Button from "../../../../../components/ui/Button";
export default function UpdatePassword() {
  const { toggle, password, handleChange, handleToggle, setPassword } =
    usePasswordForm();
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
    <>
      <div className="max-w-xl">
        <div className="flex flex-col gap-6 border-2 border-stone-200 p-6 rounded-md">
          <SecurityHeader />
          <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
            <PasswordInput
              label="Current password"
              value={password.current || ""}
              handlePassword={handleChange}
              switchToggle={() => handleToggle("current")}
              toggle={toggle.current}
              name="current"
              placeholder="Enter your current password"
            ></PasswordInput>
            <div className="grid grid-cols-2 gap-6">
              <PasswordInput
                label="New password"
                value={password.new || ""}
                handlePassword={handleChange}
                switchToggle={() => handleToggle("new")}
                toggle={toggle.new}
                name="new"
                placeholder="New password"
              />
              <PasswordInput
                label="Confirm new password"
                value={password.confirm || ""}
                handlePassword={handleChange}
                switchToggle={() => handleToggle("confirm")}
                toggle={toggle.confirm}
                name="confirm"
                placeholder="Confirm password"
              />
            </div>
            <p className="flex gap-2 items-center text-xs text-blue-600 bg-blue-100 mt-2 p-3 rounded-md">
              <GoInfo size={18} /> After saving, you will be logged out of all
              other devices and sessions for security.
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
    </>
  );
}
