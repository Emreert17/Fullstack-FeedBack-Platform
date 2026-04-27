export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-600 bg-brand-50 border border-brand-200 px-4 py-1.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
      {children}
    </span>
  );
}
