"use client";
import PersonalInformation from "./PersonalInformation";
import ProfileStatus from "./ProfileStatus";
import { useState, useEffect } from "react";

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
        const token = localStorage.getItem("token");
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await res.json();
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
    <div className="flex flex-col lg:flex-row gap-6">
      <aside className="w-full lg:w-80 flex-shrink-0">
        <ProfileStatus />
      </aside>

      <main className="flex-1 min-w-0">
        <PersonalInformation form={form} />
      </main>
    </div>
  );
}
