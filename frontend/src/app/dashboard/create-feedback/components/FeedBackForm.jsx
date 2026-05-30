"use client";

import { createFeedback } from "../../../data/feedback/createfeedback";
import FeedbackInput from "../components/FeedbackInput";
import { MdSend, MdCheckCircle } from "react-icons/md";
import { BsChatSquareText } from "react-icons/bs";
import { TbLoader2 } from "react-icons/tb";
import { useCreateFeedback } from "../../../hooks/useCreateFeedback";

export default function FeedBackForm() {
  const { form, setForm, isSubmitting, submitted, handleFeedBackForm } =
    useCreateFeedback();

  return (
    <div className="max-w-2xl">
      {/* Form card */}
      <div className="bg-white border border-slate-200/60 rounded-2xl shadow-sm shadow-slate-100/50 overflow-hidden">
        {/* Header inside card */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl text-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-sm shadow-blue-100/40">
              <BsChatSquareText size={17} />
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
                    <span className="w-4 h-4 text-white">
                      <MdCheckCircle size={16} />
                    </span>
                    Submitted
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="w-4 h-4 animate-spin">
                      <TbLoader2 size={16} />
                    </span>
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
