"use client";
import { IoIosArrowUp } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { formattedDate } from "../../../../utils/formattedDate";
import { profileBadgeTransformation } from "../../../../utils/profileBadge";
import { colorChange } from "../../../../utils/colorChange";

export default function MyFeedbackDetail({ selected }) {
  if (!selected) {
    return (
      <div className="h-[600px] flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-stone-200 bg-stone-50/50">
        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
          <FaComment size={16} className="text-stone-300" />
        </div>
        <p className="text-xs text-stone-400 font-medium tracking-wide">
          Select a feedback to view details
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
        {/* Header section */}
        <div className="px-6 pt-6 pb-5 border-b border-stone-100">
          {/* Author + date */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-[10px] font-semibold flex items-center justify-center ring-2 ring-white">
              {profileBadgeTransformation(selected.userId.username)}
            </span>
            <span className="text-xs font-medium text-stone-600">
              {selected.userId.username}
            </span>
            <span className="text-[11px] text-stone-300 ml-auto tabular-nums">
              {formattedDate(selected.createdAt)}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-[19px] font-medium text-stone-900 leading-snug mb-2.5 tracking-tight">
            {selected.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-stone-500 leading-relaxed">
            {selected.description}
          </p>
        </div>

        {/* Meta bar: status, category, vote */}
        <div className="flex items-center gap-2 px-6 py-3 bg-stone-50 border-b border-stone-100 flex-wrap">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${colorChange(selected.status)}`}
          >
            {selected.status}
          </span>
          <span className="text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
            {selected.category}
          </span>
          <div className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-stone-500 border border-stone-200 bg-white rounded-full px-3 py-1 shadow-sm">
            <IoIosArrowUp size={12} className="text-stone-400" />
            {selected.voteCount || 0}
            <span className="text-stone-300 font-normal">votes</span>
          </div>
        </div>

        {/* Comments section */}
        <div className="px-6 py-5">
          {/* Section label */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-400">
              Comments
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-stone-400 font-medium">
              <FaComment size={10} />
              {selected.commentCount}
            </span>
          </div>

          {/* <div className="flex flex-col gap-6">
                <CommentInput
                  handleComment={handleComment}
                  setText={setText}
                  text={text}
                />
      
                {comment.length > 0 ? (
                  <CommentList comment={comment} />
                ) : (
                  <div className="flex flex-col items-center gap-2 py-8 rounded-xl border border-dashed border-stone-200 bg-stone-50/60">
                    <FaComment size={14} className="text-stone-200" />
                    <p className="text-[12px] text-stone-400">
                      No comments yet — be the first
                    </p>
                  </div>
                )}
              </div> */}
        </div>
      </div>
    </>
  );
}
