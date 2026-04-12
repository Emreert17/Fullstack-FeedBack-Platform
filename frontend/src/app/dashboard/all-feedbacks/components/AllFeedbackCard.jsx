import { IoIosArrowUp } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { inter, poppins } from "../../../layout";
import { formattedDate } from "../../../utils/formattedDate";
import { transformUppercase } from "../../../utils/upperCase";
import { colorChange } from "../../../utils/colorChange";
import { spanColorChange } from "../../../utils/colorChange";
import { profileBadgeTransformation } from "../../../utils/profileBadge";

export default function AllFeedbackCard({
  feedback,
  handleVote,
  setFeedbackId,
  voteCount,
}) {
  return (
    <div className="border-2 border-stone-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 rounded-md p-4">
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-3 pl-2">
          <span className="flex justify-center items-center w-10 h-10 text-sm font-semibold text-blue-600 bg-blue-100 border-2 border-blue-300 mb-1 shadow-lg rounded-full">
            {profileBadgeTransformation(feedback.userId.username)}
          </span>
          <form onSubmit={handleVote}>
            <button
              onClick={() => setFeedbackId(feedback._id)}
              type="submit"
              className="flex flex-col items-center border-2 border-stone-200 py-1 px-3 rounded-md cursor-pointer hover:bg-stone-100 transition"
            >
              <IoIosArrowUp size={20} />
              <span className="text-sm font-bold text-stone-800">
                {voteCount.voteCount}
              </span>
            </button>
          </form>
        </div>

        <div className="w-full flex flex-col gap-1 px-2">
          <div className="flex justify-between items-start gap-2">
            <h4
              className={`${poppins.className} flex-1 text-stone-900 font-semibold text-md`}
            >
              {feedback.title}
            </h4>

            <span
              className={`${colorChange(feedback.status)} flex items-center text-xs font-medium rounded-full px-[12px] py-[2px]`}
            >
              {feedback.status}
            </span>
          </div>

          <p
            className={`${inter.className} text-stone-600 font-medium text-sm leading-relaxed py-[6px]`}
          >
            {feedback.description}
          </p>

          <div className="w-80 justify-between flex items-center gap-6">
            <div className="flex items-center gap-1 text-xs text-stone-400 font-medium">
              <div
                className={`${spanColorChange(feedback.status)} w-1 h-1 font-bold rounded-full`}
              ></div>
              {formattedDate(feedback.createdAt)}
            </div>
            <span className="text-xs text-stone-800 font-medium bg-amber-200 px-[12px] py-[2px] rounded-full">
              {transformUppercase(feedback.category)}
            </span>
            <span className="flex items-center  gap-1 text-xs text-stone-600 font-medium">
              <FaComment /> 3 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
