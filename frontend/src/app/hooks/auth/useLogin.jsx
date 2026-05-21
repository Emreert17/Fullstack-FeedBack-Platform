import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/authContext";
import { handleLogin } from "../../services/authService";

export function useLogin() {
  const { setUser } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await handleLogin({
        username: form.username,
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", data.token);
      setUser(data);

      router.push("/dashboard/analytics");
      toast.success("Great to see you again.", {
        position: "top-center",
      });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return { handleSubmit, message, form, setForm };
}
