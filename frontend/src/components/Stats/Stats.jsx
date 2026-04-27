import { StatsInfo } from "../../app/data/data";
import Badge from "../Badge/Badge";
import Stat from "./components/Stat";
import StatImage from "./components/StatImage";
import StatsHeader from "./components/StatsHeader";

export default function Stats() {
  return (
    <section id="stats" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Badge>ANALYTICS</Badge>
        <StatsHeader />
        <StatImage />
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200/60 shadow-sm">
          {StatsInfo.map((stat) => (
            <Stat key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
