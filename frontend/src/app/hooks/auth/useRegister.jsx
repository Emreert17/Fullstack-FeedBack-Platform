import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleRegister } from "../../services/authService";
import { toast } from "sonner";

export function useRegister() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleRegister({
        username: form.username,
        email: form.email,
        password: form.password,
      });

      toast.success("Registration successful.", {
        position: "top-center",
      });
      router.push("/login");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return { form, message, handleSubmit, setForm };
}
