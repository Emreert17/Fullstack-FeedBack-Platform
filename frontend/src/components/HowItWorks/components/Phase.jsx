export default function Phase({ work }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white text-sm font-semibold rounded-full">
          {work.id}
        </span>
        <h4 className="text-stone-800 text-lg font-semibold">{work.title}</h4>
        <p className="text-stone-600 font-medium text-xs">{work.description}</p>
      </div>

      {work.id >= 1 && work.id < 3 && (
        <div className="w-[3px] h-[100px] bg-stone-300 rounded-md flex-shrink-0"></div>
      )}
    </div>
  );
}
