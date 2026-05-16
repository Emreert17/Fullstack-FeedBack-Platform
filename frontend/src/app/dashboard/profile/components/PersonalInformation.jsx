import { profileStatus } from "../../../data/data";
import ProfileInput from "./ProfileInput";
import { FaUserCircle } from "react-icons/fa";

export default function PersonalInformation({ form }) {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shadow-sm shadow-blue-100/40">
            <FaUserCircle className="text-blue-500" size={16} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-800 tracking-tight">
              Personal Information
            </h3>
            <p className="text-[13px] text-slate-400 mt-0.5">
              Your profile details and contact info.
            </p>
          </div>
        </div>
      </div>

      {/* Fields grid */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
          {profileStatus.map((profile) => (
            <ProfileInput
              key={profile.id}
              profile={profile}
              value={form[profile.name]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
