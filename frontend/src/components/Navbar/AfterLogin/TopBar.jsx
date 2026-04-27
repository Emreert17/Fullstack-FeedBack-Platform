"use client";
import Link from "next/link";
import Logo from "../../Logo/Logo";
import { useAuth } from "../../../app/context/authContext";
import { MdLogout } from "react-icons/md";
import { FiSearch, FiBell } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import { profileBadgeTransformation } from "../../../app/utils/profileBadge";
import { routeMeta } from "../../../app/data/data";

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { setUser, user } = useAuth();
  const meta = routeMeta[pathname];

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser("");
    router.push("/");
  };

  return (
    <div className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-stone-200/60">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left: Logo + Page title */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {meta && (
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-semibold text-stone-800">
                {meta.title}
              </span>
              <span className="text-xs text-stone-400">{meta.description}</span>
            </div>
          )}
        </div>

        {/* Center: Search */}
        <div className="hidden lg:flex items-center gap-2 bg-stone-100/80 border border-stone-200/60 rounded-xl px-4 py-2 w-80 transition-all duration-200 focus-within:border-brand-300 focus-within:bg-white focus-within:shadow-sm">
          <FiSearch className="w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search feedbacks..."
            className="bg-transparent text-sm text-stone-700 placeholder:text-stone-400 outline-none w-full"
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-stone-100/80 text-stone-500 hover:bg-brand-50 hover:text-brand-600 transition-all duration-200 cursor-pointer">
            <FiBell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full" />
          </button>

          {/* Profile badge */}
          <div className="flex items-center gap-3 pl-3 border-l border-stone-200/60">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-medium text-stone-800">
                {user?.username || "User"}
              </span>
              <span className="text-xs text-stone-400">
                {user?.email || ""}
              </span>
            </div>

            <span className="w-9 h-9 shadow-sm rounded-xl bg-brand-100 text-brand-700 border border-brand-200 text-xs font-bold flex items-center justify-center flex-shrink-0">
              {profileBadgeTransformation(user?.username && user?.username)}
            </span>

            <button
              onClick={handleLogout}
              title="Logout"
              className="w-9 h-9 flex items-center justify-center rounded-xl text-stone-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 cursor-pointer"
            >
              <MdLogout size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
