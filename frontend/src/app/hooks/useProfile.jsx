import { getProfile } from "../services/profileService";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export function useProfile() {
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
        toast.error(err.message);
      }
    };

    fetchProfile();
  }, []);

  return { form };
}
