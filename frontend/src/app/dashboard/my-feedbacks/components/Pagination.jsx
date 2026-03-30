import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
export default function Pagination({
  page,
  totalPages,
  handleForward,
  handleBackward,
}) {
  return (
    <>
      <div className="flex items-center justify-between px-1 py-3">
        <span onClick={handleBackward} className="cursor-pointer">
          <IoIosArrowDropleftCircle size={30} />
        </span>
        <span className="font-medium text-stone-800 text-xs px-[12px] py-[5px] border-2 border-stone-300 bg-stone-200 rounded-full">
          {page} / {totalPages}
        </span>
        <span onClick={handleForward} className="cursor-pointer">
          <IoIosArrowDroprightCircle size={30} />
        </span>
      </div>
    </>
  );
}
