"use client";
import Link from "next/link";
import Logo from "../../Logo/Logo";
import { useAuth } from "../../../app/context/authContext";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";

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
        <span className="text-lg font-bold text-stone-50 bg-indigo-600 border-2 border-stone-300 rounded-full w-8 h-8 flex items-center justify-center">
          {user?.username?.charAt(0).toUpperCase()}
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
