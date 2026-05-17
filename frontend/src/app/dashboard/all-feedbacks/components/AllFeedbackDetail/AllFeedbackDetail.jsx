"use client";

import { IoIosArrowUp } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { formattedDate } from "../../../../utils/formattedDate";
import { profileBadgeTransformation } from "../../../../utils/profileBadge";
import { colorChange } from "../../../../utils/colorChange";
import CommentInput from "./CommentInput";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";

export default function AllFeedbackDetail({ selected }) {
  const [text, setText] = useState("");
  const [comment, setComment] = useState([]);

  const handleComment = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          `/api/comments/${selected._id}/comment/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text }),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setComment((prev) => [data, ...prev]);
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!selected?._id) return;

    const getComments = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            `/api/comments/${selected._id}/comment`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await res.json();

        if (!res.ok) throw new Error(data.error);

        setComment(data);
      } catch (err) {
        console.log(err);
      }
    };

    getComments();
  }, [selected?._id]);

  if (!selected) {
    return (
      <div className="flex h-full items-center justify-center bg-[#faf8f5]">
        <div className="flex flex-col items-center gap-3 text-center">
          {/* ICON */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-stone-200 bg-white shadow-sm">
            <span className="text-stone-300 text-lg">💬</span>
          </div>

          {/* TEXT */}
          <div>
            <p className="text-sm font-medium text-stone-500">
              No feedback selected
            </p>

            <p className="mt-1 text-xs text-stone-400">
              Choose an item from the list to view details
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-[#faf8f5]">
      {/* HEADER */}
      <div className="px-8 pt-6 pb-5">
        <div className="relative overflow-hidden rounded-2xl border border-stone-200/70 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.02),0_8px_24px_-12px_rgba(0,0,0,0.08)]">
          {/* subtle accent strip */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent" />

          <div className="p-7">
            {/* TOP ROW */}
            <div className="flex items-center justify-between mb-6">
              {/* STATUS + CATEGORY */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ${colorChange(selected.status)}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                  {selected.status}
                </span>

                <span className="text-[11px] font-medium bg-amber-50/80 text-amber-800 border border-amber-200/60 px-2.5 py-1 rounded-full">
                  {selected.category}
                </span>
              </div>

              {/* VOTES */}
              <div className="flex items-center gap-1.5 text-xs border border-stone-200 bg-stone-50/50 rounded-full px-3 py-1">
                <IoIosArrowUp className="text-stone-400" size={12} />
                <span className="font-semibold text-stone-700 tabular-nums">
                  {selected.voteCount || 0}
                </span>
                <span className="text-stone-400 font-normal">votes</span>
              </div>
            </div>

            {/* USER */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-100 to-violet-200/70 text-violet-700 flex items-center justify-center text-sm font-semibold ring-1 ring-violet-200/50">
                {profileBadgeTransformation(selected.userId.username)}
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-stone-800">
                  {selected.userId.username}
                </div>

                <div className="text-[11px] text-stone-400 mt-0.5">
                  {selected.userId.username.toLowerCase()}@feedback.io
                </div>
              </div>

              <div className="ml-auto text-[11px] text-stone-400 tabular-nums">
                {formattedDate(selected.createdAt)}
              </div>
            </div>

            {/* divider */}
            <div className="h-px bg-stone-100 mb-4" />

            {/* TITLE */}
            <h1 className="font-serif text-[26px] font-medium text-stone-900 leading-[1.2] tracking-tight">
              {selected.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 text-[14px] text-stone-600 leading-[1.7]">
              {selected.description}
            </p>
          </div>
        </div>
      </div>

      {/* COMMENTS SECTION */}
      <div className="flex flex-1 flex-col bg-white border-t border-stone-200/70 min-h-0">
        {/* HEADER */}
        <div className="flex items-center justify-between px-8 py-3.5 border-b border-stone-100">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-400">
            Comments
          </span>

          <span className="flex items-center gap-1.5 text-[11px] text-stone-400 font-medium tabular-nums">
            <FaComment size={9} />
            {comment.length}
          </span>
        </div>

        {/* COMMENTS LIST */}
        <div className="flex-1 overflow-y-auto px-8 py-6 bg-[#faf8f5] no-scrollbar">
          <CommentList comment={comment} />
        </div>

        {/* INPUT */}
        <div className="border-t border-stone-200/70 bg-white px-8 py-4">
          <CommentInput
            handleComment={handleComment}
            setText={setText}
            text={text}
          />
        </div>
      </div>
    </div>
  );
}
