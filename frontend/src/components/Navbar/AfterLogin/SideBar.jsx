import { sidebarLinks } from "../../../app/data/navigation/sidebar";
import Tab from "./Tab";

export default function SideBar() {
  return (
    <aside className="w-[270px] h-screen bg-white border-r border-slate-200/80 flex flex-col">
      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <div className="flex flex-col gap-6">
          {sidebarLinks.map((section, index) => (
            <div key={section.id} className="flex flex-col gap-2">
              {/* Section Title */}
              <span className="px-3 text-[11px] font-semibold tracking-[0.1em] text-slate-400 uppercase">
                {section.title}
              </span>

              {/* Links */}
              <div className="flex flex-col gap-1">
                {section.items.map((link) => (
                  <Tab key={link.id} link={link} />
                ))}
              </div>

              {index !== sidebarLinks.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mt-2" />
              )}
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
