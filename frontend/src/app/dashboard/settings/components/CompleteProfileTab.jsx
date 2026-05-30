"use client";

import { useEffect } from "react";
import ProfileField from "./ProfileField";
import { Section, Divider } from "./SectionandDivider";
import { completeProfileInfo } from "../../../data/profile/completeProfile";
import { useCompleteProfile } from "../../../hooks/useCompleteProfile";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { sections } from "../../../data/data";

const pick = (names) =>
  completeProfileInfo.filter((f) => names.includes(f.name));

export default function CompleteProfileTab() {
  const {
    fetchProfile,
    handleSubmit,
    form,
    message,
    isError,
    isSubmitting,
    handleChange,
  } = useCompleteProfile();

  useEffect(() => {
    fetchProfile();
  }, []);

  const bioField = completeProfileInfo.find((f) => f.name === "bio");

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100">
          <h3 className="text-[14px] font-semibold text-slate-800 tracking-tight">
            Complete Profile
          </h3>
          <p className="text-[12px] text-slate-400 mt-0.5">
            Add your professional details so your team knows who you are.
          </p>
        </div>

        <div className="px-6 py-6 space-y-6">
          {sections.map((section, index) => (
            <div key={section.label}>
              <Section label={section.label}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 pb-3">
                  {pick(section.fields).map((field) => (
                    <ProfileField
                      key={field.id}
                      field={field}
                      value={form[field.name]}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </Section>

              {index !== sections.length - 1 && <Divider />}
            </div>
          ))}
          <Divider />
          <Section label="About">
            {bioField && (
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={bioField.name}
                  className="text-[10px] font-semibold uppercase tracking-widest text-slate-400"
                >
                  {bioField.label}
                </label>
                <textarea
                  id={bioField.name}
                  name={bioField.name}
                  value={form.bio}
                  onChange={handleChange}
                  placeholder={bioField.placeholder}
                  className="w-full text-[13px] text-slate-700 font-medium py-2.5 px-3 min-h-[96px] bg-slate-50/40 border border-slate-200 rounded-lg outline-none resize-none transition-colors duration-100 hover:border-slate-300 focus:bg-white focus:border-blue-400 focus:ring-[3px] focus:ring-blue-50 placeholder:text-slate-300"
                />
              </div>
            )}
          </Section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-4">
          {message ? (
            <p
              className={`text-[13px] font-medium px-3 py-1.5 rounded-lg border ${
                isError
                  ? "text-red-600 bg-red-50/60 border-red-100"
                  : "text-emerald-600 bg-emerald-50/60 border-emerald-100"
              }`}
            >
              {message}
            </p>
          ) : (
            <div />
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-lg cursor-pointer bg-slate-900 text-white hover:bg-slate-700 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <AiOutlineLoading3Quarters className="w-3.5 h-3.5 animate-spin [animation-duration:1.2s]" />
                Saving...
              </span>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
