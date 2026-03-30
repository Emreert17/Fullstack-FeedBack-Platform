import Link from "next/link";
import { quickLinks } from "../../../data/data";
import QuickLink from "./QuickLink";
export default function QuickLinks() {
  return (
    <>
      <div className="w-160 flex flex-col gap-5 border-2 border-stone-200 py-6 px-4 rounded-md">
        <div className="px-1">
          <h3 className="font-bold">Quick Links</h3>
          <p className="text-xs font-medium text-stone-600">
            Jump to key sections of your account.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {quickLinks.map((link) => (
            <Link className="w-140" key={link.id} href={link.href}>
              <QuickLink link={link} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
