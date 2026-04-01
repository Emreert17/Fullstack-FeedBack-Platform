import Link from "next/link";
import Logo from "../../../components/Logo/Logo";
export default function RegisterHeader() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center py-3 justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <span className="flex gap-1 font-medium  text-sm">
            <span className="text-xs text-stone-600">
              Already have an account?
            </span>
            <Link
              className="text-xs text-indigo-500 hover:text-indigo-600"
              href="/login"
            >
              Sign in
            </Link>
          </span>
        </div>
        <div>
          <h3 className="font-medium text-lg py-2">
            Easily gather, track, and manage user feedback
          </h3>
        </div>
      </div>
    </>
  );
}
