import SettingsContainer from "./components/SettingsContainer";

export default function Settings() {
  return (
    <div className="max-w-6xl mx-auto w-full px-6 pt-8 pb-16">
      <div className="pb-6 mb-7 border-b border-slate-200/70">
        <h1 className="text-base font-semibold text-slate-900 tracking-tight">
          Settings
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your account preferences and security.
        </p>
      </div>
      <SettingsContainer />
    </div>
  );
}
