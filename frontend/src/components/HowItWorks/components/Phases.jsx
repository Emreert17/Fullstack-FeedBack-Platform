import { howItWorks } from "../../../app/data/data";
import Phase from "./Phase";

export default function Phases() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 bg-white border border-stone-200/80 rounded-2xl px-8 py-14 shadow-sm">
        {/* Connecting line (desktop only) */}
        <div className="hidden md:block absolute top-[72px] left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />

        {howItWorks.map((work) => (
          <Phase key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
