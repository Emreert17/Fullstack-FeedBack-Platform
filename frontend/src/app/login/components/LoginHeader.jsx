import Link from "next/link";
import Logo from "../../../components/Logo/Logo";
export default function LoginHeader() {
  return (
    <div>
      <Link href="/">
        <Logo />
      </Link>
      <div className="mt-6">
        <h1 className="text-xl font-semibold text-stone-900 tracking-tight">
          Welcome back
        </h1>
        <p className="mt-1.5 text-sm text-stone-500">
          Sign in to your account to continue
        </p>
      </div>
    </div>
  );
}
