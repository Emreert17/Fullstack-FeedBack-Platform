import Link from "next/link";
import Logo from "../../Logo/Logo";

export default function BeforeLogin() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-stone-500 hover:text-brand-600 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#howitworks"
            className="text-sm text-stone-500 hover:text-brand-600 transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm text-stone-500 hover:text-brand-600 transition-colors duration-200"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors duration-200"
            href="/login"
          >
            Sign In
          </Link>

          <Link
            className="text-sm font-medium bg-brand-600 text-white px-5 py-2.5 rounded-xl shadow-sm 
                       hover:bg-brand-700 hover:shadow-md hover:shadow-brand-500/20 
                       transition-all duration-200"
            href="/register"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
