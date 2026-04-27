import Link from "next/link";
import Logo from "../Logo/Logo";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Analytics", href: "#stats" },
    { label: "How It Works", href: "#howitworks" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:hello@feedly.app", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden">
      {/* Top gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* CTA Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              feedback workflow
            </span>
            ?
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto mb-8 text-base">
            Join thousands of teams who use feedly to collect and act on user
            feedback effectively.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold
                       hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/25
                       transition-all duration-300 group"
          >
            Get Started Free
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-200 mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-stone-500 leading-relaxed mb-6 max-w-[240px]">
              Turn user feedback into product decisions. Collect, organise, and
              prioritise in one place.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                             bg-stone-100 text-stone-500
                             hover:bg-brand-50 hover:text-brand-600
                             transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-500 hover:text-brand-600 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="h-px bg-stone-200 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-2">
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} feedly. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-stone-400">
            Made with
            <span className="inline-block mx-0.5 text-red-400 animate-pulse">
              ♥
            </span>
            for better products
          </div>
        </div>
      </div>
    </footer>
  );
}
