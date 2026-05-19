"use client";

import React, { useEffect, useState } from "react";
import { completeProfileInfo } from "../../../data/data";
import { completeProfile } from "../../../services/profileService";
import { getProfile } from "../../../services/profileService";

const workNames = ["jobtitle", "department"];
const companyNames = ["companyname", "companysize"];
const locationNames = ["country", "city"];

const pick = (names) =>
  completeProfileInfo.filter((f) => names.includes(f.name));

export default function CompleteProfileTab() {
  const [form, setForm] = useState({
    jobtitle: "",
    department: "",
    companyname: "",
    companysize: "",
    country: "",
    city: "",
    bio: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setForm({
          jobtitle: data.jobtitle || "",
          department: data.department || "",
          companyname: data.companyname || "",
          companysize: data.companysize || "",
          country: data.country || "",
          city: data.city || "",
          bio: data.bio || "",
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const data = await completeProfile({
        jobtitle: form.jobtitle,
        department: form.department,
        companyname: form.companyname,
        companysize: form.companysize,
        country: form.country,
        city: form.city,
        bio: form.bio,
      });
      setIsError(false);
      setMessage("Profile updated successfully.");
      setForm({
        jobtitle: data.jobtitle || "",
        department: data.department || "",
        companyname: data.companyname || "",
        companysize: data.companysize || "",
        country: data.country || "",
        city: data.city || "",
        bio: data.bio || "",
      });
    } catch (err) {
      setIsError(true);
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <Section label="Work Details">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {pick(workNames).map((field) => (
                <ProfileField
                  key={field.id}
                  field={field}
                  value={form[field.name]}
                  onChange={handleChange}
                />
              ))}
            </div>
          </Section>

          <Divider />

          <Section label="Company">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {pick(companyNames).map((field) => (
                <ProfileField
                  key={field.id}
                  field={field}
                  value={form[field.name]}
                  onChange={handleChange}
                />
              ))}
            </div>
          </Section>

          <Divider />

          <Section label="Location">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {pick(locationNames).map((field) => (
                <ProfileField
                  key={field.id}
                  field={field}
                  value={form[field.name]}
                  onChange={handleChange}
                />
              ))}
            </div>
          </Section>

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
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function Section({ label, children }) {
  return (
    <section>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3.5">
        {label}
      </p>
      {children}
    </section>
  );
}

function Divider() {
  return <div className="border-t border-slate-100" />;
}

function ProfileField({ field, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={field.name}
        className="text-[10px] font-semibold uppercase tracking-widest text-slate-400"
      >
        {field.label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          {field.icon && React.createElement(field.icon, { size: 13 })}
        </span>
        <input
          id={field.name}
          type="text"
          name={field.name}
          value={value}
          onChange={onChange}
          placeholder={field.placeholder}
          className="w-full text-[13px] text-slate-700 font-medium py-2.5 pl-8 pr-3 bg-slate-50/40 border border-slate-200 rounded-lg outline-none transition-colors duration-100 hover:border-slate-300 focus:bg-white focus:border-blue-400 focus:ring-[3px] focus:ring-blue-50 placeholder:text-slate-300"
        />
      </div>
    </div>
  );
}
