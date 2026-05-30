import { profileSection } from "../../../data/data";
import { profileStatus } from "../../../data/profile/profileStatus";
import { Divider, Section } from "./SectionandDivider";
import ProfileInput from "./ProfileInput";
import ProfileHeader from "./ProfileHeader";

const pick = (names) => profileStatus.filter((p) => names.includes(p.name));

export default function PersonalInformation({ form }) {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden">
      {/* Header */}
      <ProfileHeader />

      {/* Content */}
      <div className="px-6 py-6 space-y-7">
        {profileSection.map((section, index) => (
          <div key={section.label}>
            <Section label={section.label}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pb-4">
                {pick(section.fields).map((profile) => (
                  <ProfileInput
                    key={profile.id}
                    profile={profile}
                    value={form[profile.name]}
                  />
                ))}
              </div>
            </Section>
            {index !== profileSection.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
}
