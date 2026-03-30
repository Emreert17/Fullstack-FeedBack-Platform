import { completeProfileİnfo } from "../../../../data/data";
import CompleteProfileInput from "./CompleteProfileInput";
import WorkDetailsHeader from "./WorkDetailsHeader";

export default function CompleteProfileForm() {
  return (
    <>
      <div className="w-180">
        <div className="flex flex-col gap-4 border-2 border-stone-200 p-6 rounded-md">
          <WorkDetailsHeader />
          <form>
            <div className="grid grid-cols-2 gap-5">
              {completeProfileİnfo.map((info) => (
                <CompleteProfileInput key={info.id} info={info} />
              ))}
            </div>
            <button
              className="w-30 text-sm border border border-stone-800 ease-in-out duration-400 bg-stone-800 hover:bg-stone-50 hover:text-stone-800 text-stone-50 mt-3 px-[16px] py-[5px] rounded-md cursor-pointer"
              type="submit"
            >
              Save profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
