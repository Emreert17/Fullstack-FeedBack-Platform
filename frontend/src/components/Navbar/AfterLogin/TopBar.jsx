"use client";
import Link from "next/link";
import Logo from "../../Logo/Logo";
import { useAuth } from "../../../app/context/authContext";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import { profileBadgeTransformation } from "../../../app/utils/profileBadge";

export default function TopBar() {
  const router = useRouter();
  const { setUser, user } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser("");
    router.push("/");
  };
  return (
    <div className="flex justify-between items-center px-8 py-4 border-b-2 border-stone-200">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-[35px] h-[35px] shadow-lg rounded-full bg-blue-100 text-blue-800 border border-blue-300 text-[14px] font-semibold flex items-center justify-center flex-shrink-0">
          {profileBadgeTransformation(user?.username && user?.username)}
        </span>
        <button
          onClick={handleLogout}
          className="text-sm flex items-center gap-1 text-stone-100 bg-stone-800 px-4 py-1 rounded-md cursor-pointer"
        >
          Logout <MdLogout size={18} />
        </button>
      </div>
    </div>
  );
}
