"use client";

import PersonalInformation from "./PersonalInformation";
import ProfileStatus from "./ProfileStatus";
import { useState, useEffect } from "react";
import { getProfile } from "../../../services/profileService";

export default function ProfileContainer() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    jobtitle: "",
    department: "",
    companyname: "",
    companysize: "",
    country: "",
    city: "",
    bio: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setForm({
          username: data.username || "",
          email: data.email || "",
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
