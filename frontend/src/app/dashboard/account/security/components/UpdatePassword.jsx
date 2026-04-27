"use client";
import { useState } from "react";
import { FiInfo, FiSave, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import PasswordInput from "./PasswordInput";
import SecurityHeader from "./SecurityHeader";
import { useRouter } from "next/navigation";
import usePasswordForm from "../../../../hooks/usePasswordForm";
import { passwordInfo } from "../../../../data/data";

export default function UpdatePassword() {
  const form = usePasswordForm();
  const { password, setPassword } = form;

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      if (password.new !== password.confirm) {
        setMessageType("error");
        setLoading(false);
        return setMessage("Passwords do not match!");
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

      setMessageType("success");
      setMessage(data.success || "Password updated successfully!");

      setPassword({
        current: "",
        new: "",
        confirm: "",
      });

      setTimeout(() => {
        logoutUser();
      }, 1500);
    } catch (err) {
      setMessageType("error");
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="max-w-2xl">
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-8">
        <SecurityHeader />

        {/* Divider */}
        <div className="h-px bg-stone-200/80 my-6" />

        <form onSubmit={handleUpdatePassword} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {passwordInfo.map((input) => (
              <PasswordInput
                key={input.name}
                passwordInput={input}
                form={form}
              />
            ))}
          </div>

          {/* Info notice */}
          <div className="flex items-start gap-3 bg-brand-50 border border-brand-200 text-brand-700 rounded-xl px-4 py-3 text-sm">
            <FiInfo className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              After saving, you will be logged out of all other devices and
              sessions for security.
            </span>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium animate-fade-in-up ${
                messageType === "success"
                  ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                  : "bg-red-50 border border-red-200 text-red-600"
              }`}
            >
              {messageType === "success" ? (
                <FiCheckCircle className="w-4 h-4 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
              )}
              {message}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-sm
                         hover:bg-brand-700 hover:shadow-md hover:shadow-brand-500/20
                         active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed
                         transition-all duration-200 cursor-pointer"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Updating...
                </>
              ) : (
                <>
                  <FiSave className="w-4 h-4" />
                  Update Password
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
