import Link from "next/link";
export default function FooterColumn({ title, links }) {
  return (
    <>
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
    </>
  );
}
