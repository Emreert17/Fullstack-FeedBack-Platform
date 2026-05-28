import usePasswordForm from "./usePasswordForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updatePassword } from "../services/securityService";

export function useSecurity() {
  const form = usePasswordForm();
  const { password, setPassword } = form;

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      if (password.new !== password.confirm) {
        setIsError(true);
        setIsSubmitting(false);
        setMessage("Passwords do not match.");
        return;
      }
      const data = await updatePassword({
        password: password.current,
        newpassword: password.new,
        confirmpassword: password.new,
      });

      setIsError(false);
      setMessage(data.success);
      setPassword({ current: "", new: "", confirm: "" });
      setTimeout(() => {
        logoutUser();
      }, 1500);
    } catch (err) {
      setIsError(true);
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return { message, isError, isSubmitting, handleUpdatePassword, form };
}
