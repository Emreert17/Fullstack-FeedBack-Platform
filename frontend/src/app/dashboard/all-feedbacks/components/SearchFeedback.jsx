import { FiSearch } from "react-icons/fi";
import { LuTextSearch } from "react-icons/lu";

export default function SearchFeedback({
  setSearchValue,
  setInputValue,
  inputValue,
}) {
  return (
    <div className="flex gap-1 px-4 py-3 border-b border-slate-100">
      <div className="relative w-full">
        <FiSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={13}
        />
        <input
          type="text"
          value={inputValue}
          placeholder="Search feedbacks..."
          className="w-full pl-8 pr-4 py-2 text-[12.5px] bg-slate-50 border border-slate-200/80 rounded-lg
            outline-none placeholder:text-slate-400 text-slate-700
            focus:bg-white focus:border-slate-300 transition-all duration-150"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button
        onClick={() => setSearchValue(inputValue)}
        className="cursor-pointer"
      >
        <LuTextSearch size={22} />
      </button>
    </div>
  );
}
