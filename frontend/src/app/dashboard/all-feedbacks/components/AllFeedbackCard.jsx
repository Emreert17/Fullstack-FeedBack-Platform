"use client";

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
      className={`
        group relative flex items-start gap-3
        px-4 py-4
        transition-all duration-150 cursor-pointer
        border-b border-slate-100
        ${isSelected ? "bg-slate-50" : "hover:bg-slate-50/60"}
      `}
    >
      {/* LEFT ACTIVE INDICATOR */}
      {isSelected && (
        <span className="absolute left-0 top-3 bottom-3 w-[2.5px] rounded-r-full bg-slate-700" />
      )}

      {/* VOTE */}
      <button
        onClick={onClick}
        className={`
          flex flex-col items-center justify-center gap-0.5
          min-w-[30px] rounded-lg px-1.5 py-1.5
          transition-all duration-150 cursor-pointer border shrink-0

          ${
            feedback.voted
              ? "bg-indigo-50 border-indigo-200/80 text-indigo-600"
              : "bg-slate-50 border-slate-200/80 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600"
          }
        `}
      >
        <IoIosArrowUp size={12} />
        <span className="text-[10px] font-semibold tabular-nums leading-none">
          {feedback.voteCount || 0}
        </span>
      </button>

      {/* CONTENT */}
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        {/* AUTHOR ROW */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 text-[9px] font-semibold flex items-center justify-center ring-1 ring-violet-200/60 shrink-0">
              {profileBadgeTransformation(feedback.userId.username)}
            </span>
            <span className="text-[11px] text-slate-400 truncate font-medium">
              {feedback.userId.username}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 tabular-nums shrink-0">
            {formattedDate(feedback.createdAt)}
          </span>
        </div>

        {/* TITLE */}
        <h4
          className={`${poppins.className} text-[13px] font-medium text-slate-800 leading-snug line-clamp-2`}
        >
          {feedback.title}
        </h4>

        {/* TAGS ROW */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span
              className={`${colorChange(feedback.status)} text-[10px] font-semibold px-2 py-0.5 rounded-full`}
            >
              {feedback.status}
            </span>
            <span className="text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200/60 px-2 py-0.5 rounded-full">
              {transformUppercase(feedback.category)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-300">
            <FaComment size={9} />
            <span className="tabular-nums">{feedback.commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
