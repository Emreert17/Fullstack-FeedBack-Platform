import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaRegCalendarAlt } from "react-icons/fa";
export default function ProfileStatus() {
  return (
    <>
      <div className="border border-stone-300 p-4 shadow-md rounded-md">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center py-2">
            <span className="flex justify-center items-center w-15 h-15 font-semibold text-blue-600 bg-blue-100 border-2 border-blue-300 mb-1 shadow-lg rounded-full">
              EE
            </span>
            <h4 className="text-stone-800 text-lg font-semibold tracking-wider border-b-2 border-stone-400">
              Emre Ertugrul
            </h4>
            <h5 className="text-sm text-stone-600 font-medium">AI Engineer</h5>
            <h6 className="text-xs text-stone-500 font-medium">Claude</h6>
          </div>
          <div className="flex border-2 bg-stone-50 border-stone-200 rounded-md">
            <span className="flex flex-col items-center border-r-2 border-stone-200 p-3">
              <span className="text-sm font-semibold">24</span>
              <span className="text-xs text-stone-600 font-medium">
                Feedbacks
              </span>
            </span>
            <span className="flex flex-col items-center p-3">
              <span className="text-sm font-semibold">8</span>
              <span className="text-xs text-stone-600 font-medium">
                Resolved
              </span>
            </span>
            <span className="flex flex-col items-center border-l-2 border-stone-200 p-3">
              <span className="text-sm font-semibold">147</span>
              <span className="text-xs text-stone-600 font-medium">
                Upvotes
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <span className="flex items-center gap-4">
              <MdLocationOn className="text-stone-600" size={18} />
              <span className="text-xs text-stone-700 font-semibold">
                Istanbul,Turkey
              </span>
            </span>

            <span className="flex items-center gap-4">
              <FaEnvelope className="text-stone-600" size={18} />
              <span className="text-xs text-stone-700 font-semibold">
                emre@gmail.com
              </span>
            </span>

            <span className="flex items-center gap-4">
              <FaRegCalendarAlt className="text-stone-600" size={18} />
              <span className="text-xs text-stone-700 font-semibold">
                Joined March 2026
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
