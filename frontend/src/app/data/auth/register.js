import { FaEnvelope } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdLock } from "react-icons/md";

export const registerInput = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Full Name",
    icon: CgProfile,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    icon: FaEnvelope,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    icon: MdLock,
  },
];
