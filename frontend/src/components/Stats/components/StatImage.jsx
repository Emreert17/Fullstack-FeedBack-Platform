export default function StatImage() {
  return (
    <div className="relative flex justify-center items-center py-8">
      {/* Ambient glow */}
      <div className="absolute w-[500px] h-[400px] bg-brand-400/15 blur-3xl rounded-full animate-glow-pulse" />

      <img
        src="/image.svg"
        alt="dashboard preview"
        className="relative w-full max-w-xl rounded-2xl shadow-2xl shadow-brand-500/10 border border-stone-200/80 animate-float"
      />
    </div>
  );
}
