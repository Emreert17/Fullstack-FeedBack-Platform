export function Section({ label, children }) {
  return (
    <section>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
        {label}
      </p>
      {children}
    </section>
  );
}

export function Divider() {
  return <div className="border-t border-slate-100" />;
}
