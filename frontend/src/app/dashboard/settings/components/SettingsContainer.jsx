"use client";

import { useState } from "react";
import SettingsTabs from "./SettingsTabs";
import GeneralTab from "./GeneralTab";
import CompleteProfileTab from "./CompleteProfileTab";
import SecurityTab from "./SecurityTab";

const TABS = [
  { id: "general", label: "General" },
  { id: "profile", label: "Complete Profile" },
  { id: "security", label: "Security" },
];

export default function SettingsContainer() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="flex gap-8 items-start">
      <SettingsTabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 min-w-0">
        {activeTab === "general" && <GeneralTab setActiveTab={setActiveTab} />}
        {activeTab === "profile" && <CompleteProfileTab />}
        {activeTab === "security" && <SecurityTab />}
      </div>
    </div>
  );
}
