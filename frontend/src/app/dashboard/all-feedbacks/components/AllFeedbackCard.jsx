import { IoIosArrowUp } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { poppins } from "../../../layout";
import { formattedDate } from "../../../utils/formattedDate";
import { transformUppercase } from "../../../utils/upperCase";
import { colorChange } from "../../../utils/colorChange";
import { profileBadgeTransformation } from "../../../utils/profileBadge";

export default function AllFeedbackCard({ feedback, onClick }) {
  return (
    <div className="bg-white border border-stone-300 rounded-xl p-3 flex items-center gap-3.5 hover:border-stone-400 transition-colors duration-150 cursor-pointer">
      <button
        onClick={onClick}
        className={`flex flex-col items-center gap-0.5 min-w-[36px] border rounded-lg px-2 py-1.5 transition-colors flex-shrink-0 cursor-pointer
          ${
            feedback.voted
              ? "border-blue-400 bg-blue-50 text-blue-800"
              : "border-stone-200 bg-stone-50 text-stone-500"
          }`}
      >
        <IoIosArrowUp size={14} />
        <span className="text-xs font-medium leading-none">
          {feedback.voteCount || 0}
        </span>
      </button>

      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="w-[25px] h-[25px] shadow-lg rounded-full bg-purple-100 text-purple-800 border border-purple-300 text-[10px] font-medium flex items-center justify-center flex-shrink-0">
            {profileBadgeTransformation(feedback.userId.username)}
          </span>
          <span className="text-xs text-stone-400">
            {feedback.userId.username}
          </span>
        </div>

        <h4
          className={`${poppins.className} text-sm font-medium text-stone-800 pb-1 truncate`}
        >
          {feedback.title}
        </h4>

        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`${colorChange(feedback.status)} text-[11px] font-medium px-2.5 py-0.5 rounded-full`}
          >
            {feedback.status}
          </span>
          <span className="text-[11px] font-medium bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
            {transformUppercase(feedback.category)}
          </span>
          <div className="ml-auto flex items-center gap-2 text-[11px] font-medium text-stone-400">
            <span>{formattedDate(feedback.createdAt)}</span>
            <div className="w-[3px] h-[3px] rounded-full bg-stone-300" />
            <span className="flex items-center gap-1">
              <FaComment size={11} /> 3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
