import Link from "next/link";
import { TiPlus } from "react-icons/ti";
import RouteHeader from "../../../../components/RouteHeader/RouteHeader";
export default function FeedbackHeader() {
  return (
    <>
      <div className="flex items-center justify-between">
        <RouteHeader specialPadding="py-4">My FeedBacks</RouteHeader>
        <Link
          className="flex items-center gap-1 text-sm text-stone-100 bg-indigo-600 px-4 py-2 rounded-md"
          href="/dashboard/create-feedback"
        >
          <TiPlus size={18} />
          Add Feedback
        </Link>
      </div>
    </>
  );
}
