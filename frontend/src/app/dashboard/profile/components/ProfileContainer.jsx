"use client";

import PersonalInformation from "./PersonalInformation";
import ProfileStatus from "./ProfileStatus";
import { useProfile } from "../../../hooks/useProfile";

export default function ProfileContainer() {
  const { form } = useProfile();

  return (
    <div className="flex flex-col lg:flex-row gap-5 items-start">
      <aside className="w-full lg:w-[268px] shrink-0 lg:sticky lg:top-6">
        <ProfileStatus />
      </aside>
      <main className="flex-1 min-w-0">
        <PersonalInformation form={form} />
      </main>
    </div>
  );
}
