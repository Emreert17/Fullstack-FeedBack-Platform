import { FaBuilding, FaGlobe } from "react-icons/fa";
import { MdWork, MdApartment, MdLocationOn } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

export const completeProfileInfo = [
  {
    id: 1,
    name: "jobtitle",
    label: "Job title",
    input: true,
    placeholder: "Job title",
    icon: MdWork,
  },
  {
    id: 2,
    name: "department",
    label: "Department",
    input: true,
    placeholder: "Department",
    icon: FaBuilding,
  },
  {
    id: 3,
    name: "companyname",
    label: "Company name",
    input: true,
    placeholder: "Company name",
    icon: MdApartment,
  },
  {
    id: 4,
    name: "companysize",
    label: "Company size",
    input: true,
    placeholder: "Company size",
    icon: HiUserGroup,
  },
  {
    id: 5,
    name: "country",
    label: "Country",
    input: true,
    placeholder: "Country",
    icon: FaGlobe,
  },
  {
    id: 6,
    name: "city",
    label: "City",
    input: true,
    placeholder: "City",
    icon: MdLocationOn,
  },
  {
    id: 7,
    name: "bio",
    label: "Bio",
    input: false,
    placeholder: "A short bio about yourself...",
  },
];
