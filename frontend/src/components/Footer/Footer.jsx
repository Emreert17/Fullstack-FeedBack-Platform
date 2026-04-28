import Link from "next/link";
import Logo from "../Logo/Logo";
import { FiArrowUpRight } from "react-icons/fi";
import { footerLinks, socialLinks, CTA } from "../../app/data/data";
import SocialLinkItem from "./components/SocialLinkItem";
import FooterColumn from "./components/FooterColumn";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site footer" className="relative mt-10 overflow-hidden">
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
            {CTA["title"]}{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              {CTA["highlight"]}
            </span>
            ?
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto mb-8 text-base">
            {CTA["description"]}
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold
                       hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/25
                       transition-all duration-300 group"
          >
            {CTA["button"]}
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
                <SocialLinkItem
                  key={social.id}
                  social={social}
                  Icon={social.icon}
                />
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <FooterColumn key={title} title={title} links={links} />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="h-px bg-stone-200 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-2">
          <p className="text-sm text-stone-400">
            © {year} feedly. All rights reserved.
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
