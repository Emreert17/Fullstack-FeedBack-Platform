import { profileStatus } from "../../../data/data";
import ProfileInput from "./ProfileInput";
import Link from "next/link";
import { RiEditLine } from "react-icons/ri";

const identityNames = ["username", "email"];
const workNames = ["jobtitle", "department", "companyname", "companysize"];
const locationNames = ["country", "city"];
const bioNames = ["bio"];

const pick = (names) => profileStatus.filter((p) => names.includes(p.name));

export default function PersonalInformation({ form }) {
  const identityFields = pick(identityNames);
  const workFields = pick(workNames);
  const locationFields = pick(locationNames);
  const bioField = pick(bioNames);

  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-[14px] font-semibold text-slate-800 tracking-tight">
            Personal Information
          </h3>
          <p className="text-[12px] text-slate-400 mt-0.5">
            Your profile details and contact information.
          </p>
        </div>
        <Link
          href="/dashboard/account/complete-profile"
          className="inline-flex items-center gap-1.5 shrink-0 text-[12px] font-medium text-slate-500 hover:text-slate-800 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-all duration-150"
        >
          <RiEditLine size={13} />
          Edit
        </Link>
      </div>

      <div className="px-6 py-6 space-y-7">
        {/* Identity */}
        <section>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Identity
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {identityFields.map((profile) => (
              <ProfileInput
                key={profile.id}
                profile={profile}
                value={form[profile.name]}
              />
            ))}
          </div>
        </section>

        <div className="border-t border-slate-100/80" />

        {/* Work */}
        <section>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Work
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {workFields.map((profile) => (
              <ProfileInput
                key={profile.id}
                profile={profile}
                value={form[profile.name]}
              />
            ))}
          </div>
        </section>

        <div className="border-t border-slate-100/80" />

        {/* Location */}
        <section>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Location
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {locationFields.map((profile) => (
              <ProfileInput
                key={profile.id}
                profile={profile}
                value={form[profile.name]}
              />
            ))}
          </div>
        </section>

        <div className="border-t border-slate-100/80" />

        {/* Bio */}
        <section>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Bio
          </p>
          {bioField.map((profile) => (
            <ProfileInput
              key={profile.id}
              profile={profile}
              value={form[profile.name]}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
