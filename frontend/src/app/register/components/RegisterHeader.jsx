import Link from "next/link";
import Logo from "../../../components/Logo/Logo";
export default function RegisterHeader() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Link href="/">
          <Logo />
        </Link>
        <span className="text-xs text-stone-500">
          Already have an account?{" "}
          <Link
            className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
            href="/login"
          >
            Sign in
          </Link>
        </span>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-stone-900 tracking-tight">
          Create your account
        </h1>
        <p className="mt-1.5 text-sm text-stone-500">
          Start gathering and managing user feedback today
        </p>
      </div>
    </div>
  );
}
