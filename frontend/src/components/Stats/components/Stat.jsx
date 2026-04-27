export default function Stat({ stat }) {
  return (
    <div className="flex flex-col items-center gap-2 px-6 py-8 text-center relative group">
      {/* Hover background glow */}
      <div className="absolute inset-0 bg-brand-50/0 group-hover:bg-brand-50/60 rounded-2xl transition-colors duration-300" />
      <span className="relative text-3xl md:text-4xl font-bold bg-gradient-to-br from-brand-600 to-brand-400 bg-clip-text text-transparent">
        {stat.title}
      </span>
      <p className="relative text-stone-500 text-sm font-medium">
        {stat.description}
      </p>
    </div>
  );
}
