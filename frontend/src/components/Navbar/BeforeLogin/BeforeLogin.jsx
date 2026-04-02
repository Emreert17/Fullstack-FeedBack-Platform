import Link from "next/link";
import Logo from "../../Logo/Logo";

export default function BeforeLogin() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-stone-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            className="text-sm font-medium text-stone-600 hover:text-black transition"
            href="/login"
          >
            Sign In
          </Link>

          <Link
            className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-xl shadow-sm hover:bg-indigo-700 hover:shadow-md transition"
            href="/register"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
