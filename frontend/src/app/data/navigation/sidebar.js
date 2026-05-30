import { LuList, LuUser, LuPlus } from "react-icons/lu";
import { IoAnalytics } from "react-icons/io5";

export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    items: [
      {
        id: 1,
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
];
