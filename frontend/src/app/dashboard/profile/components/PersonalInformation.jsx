import { FiUser } from "react-icons/fi";
import { profileStatus } from "../../../data/data";
import ProfileInput from "./ProfileInput";

export default function PersonalInformation({ form }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-50 text-brand-600 flex-shrink-0">
          <FiUser className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-stone-900">
            Personal Information
          </h3>
          <p className="text-sm text-stone-500">
            Your profile details at a glance
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-stone-200/80 mb-6" />

      {/* Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileStatus.map((profile) => (
          <ProfileInput
            key={profile.id}
            profile={profile}
            value={form[profile.name]}
          />
        ))}
      </div>
    </div>
  );
}
