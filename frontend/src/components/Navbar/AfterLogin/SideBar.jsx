import { sidebarLinks } from "../../../app/data/data";
import Tab from "./Tab";

export default function SideBar() {
  return (
    <aside className="w-64 min-h-[calc(100vh-57px)] bg-white border-r border-stone-200/60 flex-shrink-0">
      <nav className="flex flex-col gap-8 px-4 py-6">
        {sidebarLinks.map((link) => (
          <Tab key={link.id} title={link.title} items={link.items} />
        ))}
      </nav>
    </aside>
  );
}
