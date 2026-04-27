export default function Phase({ work }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center relative">
      {/* Step number */}
      <div className="relative">
        <div className="absolute inset-0 bg-brand-400/20 rounded-full blur-md scale-150" />
        <span className="relative w-10 h-10 flex items-center justify-center bg-brand-600 text-white text-sm font-bold rounded-full shadow-md shadow-brand-500/30">
          {work.id}
        </span>
      </div>

      <h4 className="text-stone-900 text-lg font-semibold">{work.title}</h4>
      <p className="text-stone-500 text-sm leading-relaxed max-w-[220px]">
        {work.description}
      </p>
    </div>
  );
}
