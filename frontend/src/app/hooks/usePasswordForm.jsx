import { useState } from "react";
export default function usePasswordForm() {
  const [toggle, setToggle] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const handleChange = (e) => {
    setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleToggle = (field) => {
    setToggle((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  return {
    toggle,
    password,
    handleChange,
    handleToggle,
    setPassword,
  };
}
