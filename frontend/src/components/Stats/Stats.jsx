import { StatsInfo } from "../../app/data/data";
import Stat from "./components/Stat";
import StatImage from "./components/StatImage";

export default function Stats() {
  return (
    <>
      <div className="mt-2 mb-12">
        <div>
          <StatImage />
        </div>
        <div className="grid grid-cols-4">
          {StatsInfo.map((stat) => (
            <Stat key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </>
  );
}
