import { LuLayoutDashboard, LuList, LuUser, LuPlus } from "react-icons/lu";
import { IoAnalytics, IoDocumentTextOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdWork, MdApartment, MdLock } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import {
  FaEnvelope,
  FaBuilding,
  FaGlobe,
  FaMapMarker,
  FaComments,
} from "react-icons/fa";
import { PiUserCircleCheckBold } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { IoIosNotifications, IoIosStar } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";

export const loginInput = [
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
export const registerInput = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Name",
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
export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    items: [
      {
        id: 1,
        label: "Overview",
        href: "/dashboard/overview",
        icon: LuLayoutDashboard,
      },
      {
        id: 2,
        label: "Analytics",
        href: "/dashboard/analytics",
        icon: IoAnalytics,
      },
    ],
  },
  {
    id: 2,
    title: "Feedback",
    items: [
      {
        id: 1,
        label: "All Feedbacks",
        href: "/dashboard/all-feedbacks",
        icon: LuList,
      },
      {
        id: 2,
        label: "My Feedbacks",
        href: "/dashboard/my-feedbacks",
        icon: LuUser,
      },
      {
        id: 3,
        label: "Create Feedback",
        href: "/dashboard/create-feedback",
        icon: LuPlus,
      },
    ],
  },
  {
    id: 3,
    title: "Settings",
    items: [
      { id: 1, label: "Profile", href: "/dashboard/profile", icon: CgProfile },
      {
        id: 2,
        label: "Account",
        href: "/dashboard/account",
        icon: RiUserSettingsFill,
      },
      {
        id: 3,
        label: "Security",
        href: "/dashboard/account/security",
        icon: MdLock,
      },
    ],
  },
];
export const feedbackStatus = [
  { status: "open", color: "bg-red-200 text-red-800" },
  { status: "planned", color: "bg-yellow-200 text-yellow-800" },
  { status: "in-progress", color: "bg-blue-200 text-blue-800" },
  { status: "done", color: "bg-green-200 text-green-800" },
];
export const statusSpan = [
  { status: "open", color: "bg-red-300" },
  { status: "planned", color: "bg-yellow-300" },
  { status: "in-progress", color: "bg-blue-300" },
  { status: "done", color: "bg-green-300" },
];
export const createFeedback = [
  {
    id: 1,
    name: "title",
    label: "Title",
    type: "input",
    placeholder: "Enter a title",
  },
  {
    id: 2,
    name: "category",
    label: "Category",
    type: "select",
    options: [
      { value: "feature", label: "Feature" },
      { value: "bug", label: "Bug" },
      { value: "ui", label: "UI" },
      { value: "ux", label: "UX" },
      { value: "enhancement", label: "Enhancement" },
    ],
  },
  {
    id: 3,
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Describe your feedback...",
  },
];
export const quickLinks = [
  {
    id: 1,
    title: "Complete profile",
    description: "Add your company, location, bio and skills",
    badge: "Incomplete",
    icon: PiUserCircleCheckBold,
    href: "/dashboard/account/complete-profile",
    color: "bg-blue-200",
  },
  {
    id: 2,
    title: "Upgrade password",
    description: "Change your current login password",
    badge: "Recommended",
    icon: MdLock,
    href: "/dashboard/account/security",
    color: "bg-amber-200",
  },
];
export const completeProfileİnfo = [
  {
    id: 1,
    name: "jobTitle",
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
    name: "companyName",
    label: "Company name",
    input: true,
    placeholder: "Company name",
    icon: MdApartment,
  },
  {
    id: 4,
    name: "companySize",
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
    icon: FaMapMarker,
  },
  {
    id: 7,
    name: "bio",
    label: "Bio",
    input: false,
    placeholder: "A short bio about yourself...",
  },
];
export const FeatureCards = [
  {
    id: 1,
    title: "Feedback Collection",
    description:
      "Easily gather feedback from users in one centralized platform.",
    icon: IoDocumentTextOutline,
  },
  {
    id: 2,
    title: "Smart Analytics",
    description:
      "Understand trends and insights with powerful feedback analytics.",
    icon: SiGoogleanalytics,
  },
  {
    id: 3,
    title: "Organized Dashboard",
    description:
      "Keep all feedback structured and accessible in a clean dashboard.",
    icon: FaFolderOpen,
  },
  {
    id: 4,
    title: "Prioritization System",
    description: "Rank and prioritize feedback to focus on what matters most.",
    icon: IoIosStar,
  },
  {
    id: 5,
    title: "User Engagement",
    description:
      "Interact with users and respond to their feedback in real-time.",
    icon: FaComments,
  },
  {
    id: 6,
    title: "Notifications",
    description:
      "Stay updated with instant alerts on new feedback and updates.",
    icon: IoIosNotifications,
  },
];
export const StatsInfo = [
  { id: 1, title: "2,400+", description: "Teams using feedly" },
  { id: 2, title: "1.2M", description: "Feedbacks collected" },
  { id: 3, title: "74%", description: "Average resolution rate" },
  { id: 4, title: "4.9★", description: "Average customer rating" },
];
export const howItWorks = [
  {
    id: 1,
    title: "Create your account",
    description:
      "Sign up in under a minute. No credit card required. Invite your team right away.",
  },
  {
    id: 2,
    title: "Collect feedback",
    description:
      "Share your feedback board link or embed a widget — users submit ideas, bugs and requests directly.",
  },
  {
    id: 3,
    title: "Prioritise & resolve",
    description:
      "Review, triage and close feedback with statuses. Users get notified when their request is resolved.",
  },
];
