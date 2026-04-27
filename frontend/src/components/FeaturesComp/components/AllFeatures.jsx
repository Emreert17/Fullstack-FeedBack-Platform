import { FeatureCards } from "../../../app/data/data";
import FeatureCard from "./FeatureCard";

export default function AllFeatures() {
  return (
    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {FeatureCards.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
