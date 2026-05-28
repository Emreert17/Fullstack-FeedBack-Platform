import { toast } from "sonner";
import { useState } from "react";
import { getProfile } from "../services/profileService";
import { completeProfile } from "../services/profileService";

export function useCompleteProfile() {
  const [form, setForm] = useState({
    jobtitle: "",
    department: "",
    companyname: "",
    companysize: "",
    country: "",
    city: "",
    bio: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
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
      toast.error(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const data = await completeProfile({
        jobtitle: form.jobtitle,
        department: form.department,
        companyname: form.companyname,
        companysize: form.companysize,
        country: form.country,
        city: form.city,
        bio: form.bio,
      });
      setIsError(false);
      setMessage("Profile updated successfully.");
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
      setIsError(true);
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    fetchProfile,
    handleSubmit,
    form,
    setForm,
    message,
    isError,
    isSubmitting,
  };
}
