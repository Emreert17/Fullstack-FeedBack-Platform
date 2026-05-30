import { CgProfile } from "react-icons/cg";
import { FaEnvelope, FaBuilding, FaGlobe } from "react-icons/fa";
import { MdWork, MdApartment, MdLocationOn } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

export const profileStatus = [
  {
    id: 1,
    name: "username",
    label: "Full Name",
    input: true,
    placeholder: "Full Name",
    icon: CgProfile,
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    input: true,
    placeholder: "Email",
    icon: FaEnvelope,
  },
  {
    id: 3,
    name: "jobtitle",
    label: "Role",
    input: true,
    placeholder: "Role",
    icon: MdWork,
  },
  {
    id: 4,
    name: "department",
    label: "Department",
    input: true,
    placeholder: "Department",
    icon: FaBuilding,
  },
  {
    id: 5,
    name: "companyname",
    label: "Company name",
    input: true,
    placeholder: "Company name",
    icon: MdApartment,
  },
  {
    id: 6,
    name: "companysize",
    label: "Company size",
    input: true,
    placeholder: "Company size",
    icon: HiUserGroup,
  },
  {
    id: 7,
    name: "country",
    label: "Country",
    input: true,
    placeholder: "Country",
    icon: FaGlobe,
  },
  {
    id: 8,
    name: "city",
    label: "City",
    input: true,
    placeholder: "City",
    icon: MdLocationOn,
  },
  {
    id: 9,
    name: "bio",
    label: "Bio",
    input: false,
    placeholder: "A short bio about yourself...",
  },
];
