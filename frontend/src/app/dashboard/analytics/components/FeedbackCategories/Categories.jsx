export default function Categories({ label, value, max }) {
  const percentage = (value / max) * 100;

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col min-w-[80px]">
        <span className="text-sm text-stone-500">{label}</span>
        <span className="text-sm font-semibold text-stone-800">{value}</span>
      </div>
      <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className="h-full bg-red-400 rounded-full transition-all"
        />
      </div>
    </div>
  );
}
