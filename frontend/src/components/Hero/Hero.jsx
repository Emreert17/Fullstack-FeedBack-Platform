import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl animate-glow-pulse [animation-delay:2s]" />
      </div>

      <div className="relative flex flex-col items-center justify-center text-center pt-24 pb-20 px-4 gap-8">
        <span className="inline-flex items-center gap-2 text-sm bg-brand-50 text-brand-700 border border-brand-200 px-5 py-2 rounded-full font-medium shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          New Feature: Feedback Analytics
        </span>

        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-stone-900">
            Turn user feedback into{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              product decisions
            </span>
          </h1>
        </div>

        <p className="max-w-xl text-stone-500 text-lg md:text-xl leading-relaxed">
          Collect, organise and prioritise feedback from your users in one place.
          Stop losing great ideas in email threads and spreadsheets.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/register"
            className="group flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-2xl font-semibold text-base
                       hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/25
                       transition-all duration-300 cursor-pointer"
          >
            Get Started Free
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/login"
            className="flex items-center justify-center border-2 border-stone-200 text-stone-700 px-8 py-4 rounded-2xl font-semibold text-base
                       hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700
                       transition-all duration-300 cursor-pointer"
          >
            Sign In
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center gap-6 mt-6 text-sm text-stone-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Free to start
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
