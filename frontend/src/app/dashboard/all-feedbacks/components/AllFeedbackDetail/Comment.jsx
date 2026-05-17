import { formattedDate } from "../../../../utils/formattedDate";
import { profileBadgeTransformation } from "../../../../utils/profileBadge";

export default function Comment({ comment }) {
  return (
    <div className="flex gap-3">
      {/* AVATAR */}
      <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600 shrink-0">
        {profileBadgeTransformation(comment.userId.username)}
      </div>

      {/* BUBBLE */}
      <div className="flex-1">
        <div className="rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-slate-800">
              {comment.userId.username}
            </span>

            <span className="text-[11px] text-slate-400">
              {formattedDate(comment.createdAt)}
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {comment.text}
          </p>
        </div>
      </div>
    </div>
  );
}
