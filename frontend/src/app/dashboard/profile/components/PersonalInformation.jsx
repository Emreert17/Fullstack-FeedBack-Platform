import { profileStatus } from "../../../data/data";
import ProfileInput from "./ProfileInput";

export default function PersonalInformation({ form }) {
  return (
    <div className="border border-stone-300 p-6 shadow-md rounded-xl bg-white">
      <h3 className="text-lg font-semibold tracking-wider mb-6 text-gray-800">
        Personal Information
      </h3>

      <div className="grid grid-cols-2 gap-8">
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
