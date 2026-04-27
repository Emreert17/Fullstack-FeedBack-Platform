"use client";
import { IoIosArrowUp } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { poppins } from "../../../layout";
import { formattedDate } from "../../../utils/formattedDate";
import { transformUppercase } from "../../../utils/upperCase";
import { colorChange } from "../../../utils/colorChange";
import { profileBadgeTransformation } from "../../../utils/profileBadge";

export default function MyFeedbackCard({
  feedback,
  onClick = () => {},
  isSelected,
  currentUserId,
}) {
  const isOwn = feedback.userId?._id === currentUserId;

  return (
    <div
      className={`group relative flex items-start gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer
        ${
          isSelected
            ? "bg-stone-50 border-stone-300 shadow-sm"
            : "bg-white border-stone-200 hover:border-stone-200 hover:shadow-sm"
        }`}
    >
      {/* Selected bar */}
      {isSelected && (
        <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-stone-400 rounded-full" />
      )}

      {/* Vote */}
      <button
        disabled={isOwn}
        onClick={(e) => {
          e.stopPropagation();
          if (!isOwn && typeof onClick === "function") onClick(e);
        }}
        className={`flex flex-col items-center justify-center gap-0.5 min-w-[32px] rounded-lg px-1.5 py-1.5 border transition-all duration-150
          ${
            isOwn
              ? "bg-stone-100 border-stone-300 text-stone-600"
              : feedback.voted
                ? "bg-indigo-50 border-indigo-200 text-indigo-600"
                : "bg-stone-50 border-stone-200 text-stone-400 group-hover:border-stone-300 group-hover:text-stone-600"
          }`}
      >
        <IoIosArrowUp size={13} />
        <span className="text-[10px] font-semibold text-stone-800 tabular-nums">
          {feedback.voteCount || 0}
        </span>
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {/* Badge */}
            <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 text-[9px] font-semibold flex items-center justify-center flex-shrink-0 ring-1 ring-violet-200">
              {profileBadgeTransformation(feedback.userId?.username)}
            </span>

            {/* You indicator */}
            {isOwn && (
              <span className="text-[10px] text-stone-400 font-medium">
                You
              </span>
            )}
          </div>

          <span className="text-[10px] font-medium text-stone-500 flex-shrink-0 tabular-nums">
            {formattedDate(feedback.createdAt)}
          </span>
        </div>

        {/* Title */}
        <h4
          className={`${poppins.className} text-[13px] font-medium text-stone-800 leading-snug line-clamp-2`}
        >
          {feedback.title}
        </h4>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              className={`${colorChange(
                feedback.status,
              )} text-[10px] font-semibold px-2 py-0.5 rounded-full`}
            >
              {feedback.status}
            </span>
            <span className="text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
              {transformUppercase(feedback.category)}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-stone-300">
            <FaComment size={10} />
            <span>{feedback.commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
