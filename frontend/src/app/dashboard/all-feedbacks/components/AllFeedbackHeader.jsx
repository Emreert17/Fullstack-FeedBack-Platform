import RouteHeader from "../../../../components/RouteHeader/RouteHeader";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";

export default function AllFeedbackHeader() {
  return (
    <>
      <div className="flex items-center justify-between">
        <RouteHeader specialPadding="py-4">All FeedBacks</RouteHeader>
        <Link
          className="flex items-center gap-1 text-xs text-stone-100 bg-indigo-600 px-4 py-2 rounded-md active:scale-95"
          href="/dashboard/create-feedback"
        >
          <TiPlus size={18} />
          Add Feedback
        </Link>
      </div>
    </>
  );
}
