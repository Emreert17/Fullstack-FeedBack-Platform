export default function StatImage() {
  return (
    <div className="relative flex justify-center items-center py-10">
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <img
        src="/image.svg"
        alt="dashboard preview"
        className="relative w-full max-w-xl rounded-2xl shadow-2xl border border-stone-200"
      />
    </div>
  );
}
