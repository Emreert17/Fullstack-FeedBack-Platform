"use client";
import { useEffect, useState } from "react";
import { completeProfileInfo } from "../../../../data/data";
import CompleteProfileInput from "./CompleteProfileInput";
import WorkDetailsHeader from "./WorkDetailsHeader";
import Button from "../../../../../components/ui/Button";

export default function CompleteProfileForm() {
  const [form, setForm] = useState({
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
        console.log(data);
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

  const handleCompleteProfile = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            jobtitle: form.jobtitle,
            department: form.department,
            companyname: form.companyname,
            companysize: form.companysize,
            country: form.country,
            city: form.city,
            bio: form.bio,
          }),
        },
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong!");
      }
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
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="w-180">
        <div className="flex flex-col gap-4 border-2 border-stone-200 p-8 rounded-md">
          <WorkDetailsHeader />
          <form onSubmit={handleCompleteProfile}>
            <div className="grid grid-cols-2 gap-5">
              {completeProfileInfo.map((info) => (
                <CompleteProfileInput
                  key={info.id}
                  handleChange={handleChange}
                  value={form[info.name] || ""}
                  info={info}
                />
              ))}
            </div>
            <div className="mt-4">
              <Button variant="secondary" width="w-30" type="submit">
                Save Profile
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
