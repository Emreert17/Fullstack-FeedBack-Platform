import Link from "next/link";
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-18 px-4 gap-6">
      <span className="text-sm bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
        🚀 New Feature: Feedback Analytics
      </span>

      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Turn user feedback into{" "}
          <span className="text-blue-600">product decisions</span>
        </h1>
      </div>

      <p className="max-w-xl text-gray-600 text-base md:text-lg">
        Collect, organise and prioritise feedback from your users in one place.
        Stop losing great ideas in email threads and spreadsheets.
      </p>

      <div className="flex gap-4 mt-4">
        <Link
          href="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Get Started
        </Link>
        <Link
          href="/login"
          className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition cursor-pointer"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
}
