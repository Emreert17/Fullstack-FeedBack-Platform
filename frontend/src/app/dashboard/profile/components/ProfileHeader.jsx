import Link from "next/link";
import { RiEditLine } from "react-icons/ri";

export default function ProfileHeader() {
  return (
    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
      <div>
        <h3 className="text-[14px] font-semibold text-slate-800 tracking-tight">
          Personal Information
        </h3>
        <p className="text-[12px] text-slate-400 mt-0.5">
          Your profile details and contact information.
        </p>
      </div>
      <Link
        href="/dashboard/settings"
        className="inline-flex items-center gap-1.5 shrink-0 text-[12px] font-medium text-slate-500 hover:text-slate-800 border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-all duration-150"
      >
        <RiEditLine size={13} />
        Edit
      </Link>
    </div>
  );
}
