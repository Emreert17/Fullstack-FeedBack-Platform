import { FiShield } from "react-icons/fi";

export default function SecurityHeader() {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-50 text-brand-600 flex-shrink-0">
        <FiShield className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-stone-900">Update Password</h4>
        <p className="text-sm text-stone-500 mt-0.5">
          Choose a new password at least 6 characters long with a mix of
          letters, numbers and symbols.
        </p>
      </div>
    </div>
  );
}
