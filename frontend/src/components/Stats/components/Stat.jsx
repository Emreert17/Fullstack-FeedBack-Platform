export default function Stat({ stat }) {
  return (
    <>
      <div className="flex flex-col items-center gap-1 border border-stone-300 shadow px-6 py-12">
        <span className="text-blue-600 text-3xl font-semibold">
          {stat.title}
        </span>
        <p className="text-stone-600 text-sm font-medium tracking-wider">
          {stat.description}
        </p>
      </div>
    </>
  );
}
