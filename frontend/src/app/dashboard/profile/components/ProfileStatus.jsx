import { useAuth } from "../../../context/authContext";
import { profileBadgeTransformation } from "../../../utils/profileBadge";
import { FiMapPin, FiMail, FiCalendar } from "react-icons/fi";

export default function ProfileStatus() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden">
      {/* Cover gradient */}
      <div className="h-24 bg-gradient-to-br from-brand-500 to-brand-700 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent)]" />
      </div>

      {/* Avatar + Info */}
      <div className="flex flex-col items-center px-6 pb-6 -mt-10">
        <span className="w-20 h-20 flex items-center justify-center text-2xl font-bold text-brand-700 bg-white border-4 border-white rounded-2xl shadow-md">
          {profileBadgeTransformation(user?.username && user?.username)}
        </span>

        <h4 className="text-lg font-bold text-stone-900 mt-3">
          {user?.username || "User"}
        </h4>
        <p className="text-sm text-stone-500">AI Engineer</p>
        <p className="text-xs text-stone-400">Claude</p>

        {/* Stats */}
        <div className="w-full grid grid-cols-3 gap-1 mt-5 bg-stone-50 rounded-xl p-1">
          <div className="flex flex-col items-center py-3 rounded-lg hover:bg-white transition-colors duration-200">
            <span className="text-lg font-bold text-stone-900">24</span>
            <span className="text-xs text-stone-500">Feedbacks</span>
          </div>
          <div className="flex flex-col items-center py-3 rounded-lg hover:bg-white transition-colors duration-200">
            <span className="text-lg font-bold text-stone-900">8</span>
            <span className="text-xs text-stone-500">Resolved</span>
          </div>
          <div className="flex flex-col items-center py-3 rounded-lg hover:bg-white transition-colors duration-200">
            <span className="text-lg font-bold text-stone-900">147</span>
            <span className="text-xs text-stone-500">Upvotes</span>
          </div>
        </div>

        {/* Meta info */}
        <div className="w-full flex flex-col gap-3 mt-5 pt-5 border-t border-stone-200/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-stone-100 text-stone-400">
              <FiMapPin className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm text-stone-600">Istanbul, Turkey</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-stone-100 text-stone-400">
              <FiMail className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm text-stone-600">
              {user?.email || "email@example.com"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-stone-100 text-stone-400">
              <FiCalendar className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm text-stone-600">Joined March 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
