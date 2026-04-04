import { FeatureCards } from "../../../app/data/data";
import FeatureCard from "./FeatureCard";

export default function AllFeatures() {
  return (
    <>
      <div className="max-w-3xl grid grid-cols-3 gap-4">
        {FeatureCards.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </>
  );
}
