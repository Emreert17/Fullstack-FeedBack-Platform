import { formattedDate } from "../../../utils/formattedDate";
import { transformUppercase } from "../../../utils/upperCase";
import { colorChange } from "../../../utils/colorChange";
import { spanColorChange } from "../../../utils/colorChange";
import { inter, poppins } from "../../../layout";
import { FaComment } from "react-icons/fa";

export default function FeedbackCard({ feedback }) {
  return (
    <>
      <div className="border-2 border-stone-300 shadow-sm hover:shadow-md transition duration-200 rounded-md p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h4
              className={`${poppins.className} text-stone-900 font-semibold text-md`}
            >
              {feedback.title}
            </h4>
            <span
              className={`${colorChange(feedback.status)} text-xs font-medium rounded-full px-[12px] py-[2px]`}
            >
              {feedback.status}
            </span>
          </div>
          <p
            className={`${inter.className} text-stone-600 font-medium text-sm py-[6px]`}
          >
            {feedback.description}
          </p>
          <div className="w-80 flex justify-between items-center gap-6">
            <div className="flex items-center gap-1 text-xs text-stone-500 font-medium">
              <div
                className={`${spanColorChange(feedback.status)} w-1 h-1 font-bold rounded-full`}
              ></div>
              {formattedDate(feedback.createdAt)}
            </div>
            <span className="text-xs text-stone-800 font-medium bg-amber-200 px-[12px] py-[2px] rounded-full">
              {transformUppercase(feedback.category)}
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-500 font-medium">
              <FaComment /> 3 comments
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
