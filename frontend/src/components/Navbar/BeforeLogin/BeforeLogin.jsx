import Link from "next/link";
import Logo from "../../Logo/Logo";

export default function BeforeLogin() {
  return (
    <>
      <div className="bg-stone-50 border-b-2 border-stone-200">
        <div className="flex justify-around items-center px-4 py-5">
          <span className="flex items-center gap-4">
            <Link href="/">
              <Logo />
            </Link>

            <Link
              className="text-stone-700 font-medium text-lg pt-[3px]"
              href="/feedbacks"
            >
              Feedbacks
            </Link>
          </span>

          <span className="flex items-center gap-4">
            <Link className="text-stone-700 font-medium" href="/login">
              Sign in
            </Link>

            <Link
              className="text-stone-50 bg-indigo-600 font-medium px-3 py-2 rounded-lg"
              href="/register"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
