import { IoDocumentTextOutline } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { IoIosNotifications, IoIosStar } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";

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
