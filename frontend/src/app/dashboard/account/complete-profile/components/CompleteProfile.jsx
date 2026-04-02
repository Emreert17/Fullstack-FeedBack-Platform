"use client";
import { useState } from "react";
import { completeProfileİnfo } from "../../../../data/data";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="w-180">
        <div className="flex flex-col gap-4 border-2 border-stone-200 p-8 rounded-md">
          <WorkDetailsHeader />
          <form>
            <div className="grid grid-cols-2 gap-5">
              {completeProfileİnfo.map((info) => (
                <CompleteProfileInput
                  key={info.id}
                  handleChange={handleChange}
                  value={form[info.name]}
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
