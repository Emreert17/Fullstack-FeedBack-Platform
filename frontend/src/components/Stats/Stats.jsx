import { StatsInfo } from "../../app/data/data";
import Badge from "../Badge/Badge";
import Stat from "./components/Stat";
import StatImage from "./components/StatImage";
import StatsHeader from "./components/StatsHeader";

export default function Stats() {
  return (
    <>
      <section id="stats" className="mt-2 mb-14">
        <div className="flex flex-col gap-4">
          <Badge>ANALYTICS</Badge>
          <StatsHeader />
          <StatImage />
          <div className="grid grid-cols-4">
            {StatsInfo.map((stat) => (
              <Stat key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
