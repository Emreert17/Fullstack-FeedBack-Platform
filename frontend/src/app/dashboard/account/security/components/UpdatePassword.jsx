"use client";

import { GoInfo } from "react-icons/go";
import PasswordInput from "./PasswordInput";
import SecurityHeader from "./SecurityHeader";
import { passwordInfo } from "../../../../data/data";
import { useSecurity } from "../../../../hooks/useSecurity";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function UpdatePassword() {
  const { message, isError, isSubmitting, handleUpdatePassword, form } =
    useSecurity();

  return (
    <div className="max-w-xl">
      <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100">
          <SecurityHeader />
        </div>

        {/* Form body */}
        <div className="px-6 py-5">
          <form onSubmit={handleUpdatePassword} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {passwordInfo.map((input) => (
                <PasswordInput
                  key={input.name}
                  passwordInput={input}
                  form={form}
                />
              ))}
            </div>

            {/* Info banner */}
            <div className="flex items-start gap-2.5 text-[13px] text-blue-600 bg-blue-50/70 border border-blue-100/80 p-3.5 rounded-xl">
              <GoInfo size={16} className="mt-0.5 shrink-0 text-blue-400" />
              <span className="text-blue-500 leading-relaxed">
                After saving, you will be logged out of all other devices and
                sessions for security.
              </span>
            </div>

            {/* Status message */}
            {message && (
              <p
                className={`text-sm font-medium px-3.5 py-2.5 rounded-xl ${
                  isError
                    ? "text-red-600 bg-red-50/70 border border-red-100/80"
                    : "text-emerald-600 bg-emerald-50/70 border border-emerald-100/80"
                }`}
              >
                {message}
              </p>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  group flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-xl cursor-pointer
                  transition-all duration-300 ease-out
                  bg-gradient-to-b from-blue-500 to-blue-600 text-white
                  shadow-md shadow-blue-200/60
                  hover:shadow-lg hover:shadow-blue-200/80 hover:-translate-y-0.5
                  active:translate-y-0 active:shadow-sm
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md
                `}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
                ) : (
                  "Update Password"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
