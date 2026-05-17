"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoInfo } from "react-icons/go";
import PasswordInput from "../../account/security/components/PasswordInput";
import usePasswordForm from "../../../hooks/usePasswordForm";
import { passwordInfo } from "../../../data/data";

export default function SecurityTab() {
  const form = usePasswordForm();
  const { password, setPassword } = form;

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      if (password.new !== password.confirm) {
        setIsError(true);
        setIsSubmitting(false);
        return setMessage("Passwords do not match.");
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
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setIsError(false);
      setMessage(data.success);
      setPassword({ current: "", new: "", confirm: "" });
      setTimeout(() => logoutUser(), 1500);
    } catch (err) {
      setIsError(true);
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Password card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h3 className="text-[14px] font-semibold text-slate-800 tracking-tight">
            Update Password
          </h3>
          <p className="text-[12px] text-slate-400 mt-0.5">
            At least 6 characters with a mix of letters, numbers, and symbols.
          </p>
        </div>

        <form onSubmit={handleUpdatePassword}>
          <div className="px-6 py-6 space-y-5">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {passwordInfo.map((input) => (
                <PasswordInput key={input.name} passwordInput={input} form={form} />
              ))}
            </div>

            {/* Info banner */}
            <div className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
              <GoInfo size={14} className="mt-px shrink-0 text-slate-400" />
              <span className="text-[12px] text-slate-500 leading-relaxed">
                After saving, you will be signed out of all other devices and
                sessions automatically.
              </span>
            </div>

            {/* Status message */}
            {message && (
              <p
                className={`text-[13px] font-medium px-3.5 py-2.5 rounded-xl border ${
                  isError
                    ? "text-red-600 bg-red-50/60 border-red-100"
                    : "text-emerald-600 bg-emerald-50/60 border-emerald-100"
                }`}
              >
                {message}
              </p>
            )}
          </div>

          <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <div />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-lg cursor-pointer bg-slate-900 text-white hover:bg-slate-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-3.5 h-3.5 animate-spin"
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
                "Update Password"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Active sessions card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h3 className="text-[14px] font-semibold text-slate-800 tracking-tight">
            Active Sessions
          </h3>
          <p className="text-[12px] text-slate-400 mt-0.5">
            Devices currently signed in to your account.
          </p>
        </div>

        <div className="px-6 py-5">
          <div className="flex items-center gap-3.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-slate-700">
                Current session
              </p>
              <p className="text-[12px] text-slate-400 mt-0.5">
                Updating your password will sign out all other active sessions.
              </p>
            </div>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
