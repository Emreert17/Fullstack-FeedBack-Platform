"use client";
import { useState } from "react";
import { createFeedback } from "../../../data/data";
import FeedbackInput from "../components/FeedbackInput";
import { FiSend, FiCheckCircle } from "react-icons/fi";

export default function FeedBackForm() {
  const [form, setForm] = useState({
    title: "",
    category: "feature",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFeedBackForm = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
      setForm({ title: "", category: "feature", description: "" });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl">
      {/* Card */}
      <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-8">
        {/* Card header */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-1">
            Submit New Feedback
          </h2>
          <p className="text-sm text-stone-500">
            Share your ideas, report bugs, or suggest improvements. Your
            feedback helps us build a better product.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleFeedBackForm} className="flex flex-col gap-6">
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

          {/* Divider */}
          <div className="h-px bg-stone-200/80" />

          {/* Actions */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-stone-400">
              All fields are required
            </p>

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
                  Submitting...
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  Submit Feedback
                </>
              )}
            </button>
          </div>
        </form>

        {/* Success toast */}
        {success && (
          <div className="mt-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-4 py-3 text-sm font-medium animate-fade-in-up">
            <FiCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            Feedback submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
}
