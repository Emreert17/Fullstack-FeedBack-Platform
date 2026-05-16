"use client";

import { useState } from "react";
import { createFeedback } from "../../../data/data";
import FeedbackInput from "../components/FeedbackInput";
import { MdSend } from "react-icons/md";

export default function FeedBackForm() {
  const [form, setForm] = useState({
    title: "",
    category: "feature",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedBackForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: form.title,
            description: form.description,
            category: form.category,
          }),
        },
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        console.log("Fetch is not working");
      } else {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }
      setForm({ title: "", category: "feature", description: "" });
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl">
      {/* Form card */}
      <div className="bg-white border border-slate-200/60 rounded-2xl shadow-sm shadow-slate-100/50 overflow-hidden">
        {/* Header inside card */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-sm shadow-blue-100/40">
              <svg
                className="w-[18px] h-[18px] text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-800 tracking-tight">
                Submit Feedback
              </h2>
              <p className="text-[13px] text-slate-400 mt-0.5">
                Share your ideas, report bugs, or request new features.
              </p>
            </div>
          </div>
        </div>

        {/* Form body */}
        <div className="px-6 py-5">
          <form onSubmit={handleFeedBackForm} className="flex flex-col gap-5">
            {createFeedback.map((field) => (
              <FeedbackInput
                key={field.id}
                label={field.label}
                name={field.name}
                type={field.type}
                value={form[field.name]}
                onChange={(e) =>
                  setForm({ ...form, [field.name]: e.target.value })
                }
                placeholder={field.placeholder}
                options={field.options}
              />
            ))}

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-slate-400">All fields are required</p>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                group relative flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-xl cursor-pointer
                transition-all duration-300 ease-out
                ${
                  submitted
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-200"
                    : "bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-md shadow-blue-200/60 hover:shadow-lg hover:shadow-blue-200/80 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
                }
                disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md
              `}
              >
                {submitted ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Submitted
                  </>
                ) : isSubmitting ? (
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
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Feedback
                    <MdSend
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
