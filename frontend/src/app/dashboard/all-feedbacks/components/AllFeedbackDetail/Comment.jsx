import { formattedDate } from "../../../../utils/formattedDate";
import { profileBadgeTransformation } from "../../../../utils/profileBadge";

export default function Comment({ comment }) {
  return (
    <div className="flex gap-3 p-4 rounded-xl bg-white border border-stone-100 hover:border-stone-200 transition">
      <span className="w-9 h-9 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-xs font-medium flex items-center justify-center shrink-0">
        {profileBadgeTransformation(comment.userId.username)}
      </span>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h5 className="text-sm font-medium text-stone-800">
            {comment.userId.username}
          </h5>
          <span className="text-xs text-stone-400">
            {formattedDate(comment.createdAt)}
          </span>
        </div>

        <p className="text-sm text-stone-600 mt-1 leading-relaxed">
          {comment.text}
        </p>
      </div>
    </div>
  );
}
