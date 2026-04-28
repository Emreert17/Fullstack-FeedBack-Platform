export default function SocialLinkItem({ social, Icon }) {
  return (
    <>
      <a
        key={social.label}
        href={social.href}
        aria-label={social.label}
        className="w-9 h-9 flex items-center justify-center rounded-lg
                             bg-stone-100 text-stone-500
                             hover:bg-brand-50 hover:text-brand-600
                             transition-all duration-200"
      >
        <Icon className="w-4 h-4" />
      </a>
    </>
  );
}
