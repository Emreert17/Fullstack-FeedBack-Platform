import { IoIosArrowUp } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { poppins } from "../../../layout";
import { formattedDate } from "../../../utils/formattedDate";
import { transformUppercase } from "../../../utils/upperCase";
import { colorChange } from "../../../utils/colorChange";
import { profileBadgeTransformation } from "../../../utils/profileBadge";

export default function AllFeedbackCard({ feedback, onClick, isSelected }) {
  return (
    <div
      className={`group flex items-start gap-3 px-4 py-3 rounded-lg border transition-all duration-150 cursor-pointer
      ${
        isSelected
          ? "bg-stone-50 border-stone-300"
          : "bg-white border-stone-200 hover:bg-stone-50 hover:border-stone-300"
      }`}
    >
      <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center gap-0.5 min-w-[34px] rounded-md px-2 py-1 transition cursor-pointer
        ${
          feedback.voted
            ? "text-blue-600 bg-blue-50"
            : "text-stone-400 group-hover:text-stone-700 hover:bg-stone-100"
        }`}
      >
        <IoIosArrowUp size={14} />
        <span className="text-[11px] font-medium leading-none">
          {feedback.voteCount || 0}
        </span>
      </button>

      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 border border-purple-200 text-[10px] font-medium flex items-center justify-center flex-shrink-0">
              {profileBadgeTransformation(feedback.userId.username)}
            </span>

            <span className="text-xs text-stone-500 truncate">
              {feedback.userId.username}
            </span>
          </div>

          <span className="text-[11px] text-stone-400 flex-shrink-0">
            {formattedDate(feedback.createdAt)}
          </span>
        </div>

        <h4
          className={`${poppins.className} text-sm font-medium text-stone-800 leading-snug line-clamp-2`}
        >
          {feedback.title}
        </h4>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span
              className={`${colorChange(
                feedback.status,
              )} text-[11px] font-medium px-2 py-0.5 rounded-full`}
            >
              {feedback.status}
            </span>

            <span className="text-[11px] font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
              {transformUppercase(feedback.category)}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-stone-400">
            <FaComment size={11} />
            <span>{feedback.commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
