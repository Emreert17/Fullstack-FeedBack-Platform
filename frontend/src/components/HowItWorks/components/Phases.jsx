import { howItWorks } from "../../../app/data/data";
import Phase from "./Phase";
export default function Phases() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-8 bg-stone-50 border-2 border-stone-200 rounded-lg px-8 py-12 shadow-md hover:shadow-xl transition">
        {howItWorks.map((work) => (
          <Phase key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}
