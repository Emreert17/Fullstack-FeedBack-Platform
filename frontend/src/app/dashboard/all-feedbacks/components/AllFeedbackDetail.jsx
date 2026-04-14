import { IoIosArrowUp } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { formattedDate } from "../../../utils/formattedDate";
import { profileBadgeTransformation } from "../../../utils/profileBadge";
import { colorChange } from "../../../utils/colorChange";

export default function AllFeedbackDetail({ selected }) {
  if (!selected) {
    return (
      <div className="h-[600px] flex flex-col items-center justify-center gap-3 border border-dashed border-stone-200 rounded-xl text-stone-400">
        <FaComment size={28} className="opacity-25" />
        <p className="text-sm">Select a feedback to see details</p>
      </div>
    );
  }

  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="p-6 border-b border-stone-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-medium flex items-center justify-center">
            {profileBadgeTransformation(selected.userId.username)}
          </span>
          <span className="text-sm text-stone-500">
            {selected.userId.username}
          </span>
          <span className="text-xs font-medium text-stone-400 ml-auto">
            {formattedDate(selected.createdAt)}
          </span>
        </div>

        <h2 className="font-serif text-xl font-medium text-stone-900 leading-snug mb-3">
          {selected.title}
        </h2>
        <p className="text-sm text-stone-500 leading-relaxed">
          {selected.description}
        </p>
      </div>

      <div className="flex items-center gap-2 px-6 py-3 border-b border-stone-100 flex-wrap">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${colorChange(selected.status)}`}
        >
          {selected.status}
        </span>
        <span className="text-xs bg-amber-100 text-amber-800 font-medium px-3 py-1 rounded-full">
          {selected.category}
        </span>
        <div className="ml-auto flex items-center gap-1.5 text-sm font-medium text-stone-500 border border-stone-200 rounded-full px-3 py-1">
          <IoIosArrowUp size={14} className="text-stone-400" />
          {selected.voteCount || 0}
        </div>
      </div>

      <div className="p-6">
        <p className="text-[11px] uppercase tracking-widest font-medium text-stone-400 mb-4">
          Comments
        </p>

        {/* swap the placeholder below with your real comments map */}
        <div className="text-sm text-stone-400 text-center py-5 border border-dashed border-stone-200 rounded-lg">
          No comments yet
        </div>
      </div>
    </div>
  );
}
