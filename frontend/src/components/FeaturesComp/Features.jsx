import Badge from "../Badge/Badge";
import AllFeatures from "./components/AllFeatures";
import FeatureHeader from "./components/FeatureHeader";

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Badge>FEATURES</Badge>
        <FeatureHeader />
        <AllFeatures />
      </div>
    </section>
  );
}
