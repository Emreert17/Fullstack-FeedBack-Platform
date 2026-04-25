import { sidebarLinks } from "../../../app/data/data";
import Tab from "./Tab";

export default function SideBar() {
  return (
    <>
      <div className="w-55 min-h-screen border-r border-gray-800 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-10 px-3 py-10">
            {sidebarLinks.map((link) => (
              <Tab key={link.id} title={link.title} items={link.items} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
