import Badge from "../Badge/Badge";
import AllFeatures from "./components/AllFeatures";
import FeatureHeader from "./components/FeatureHeader";

export default function Features() {
  return (
    <>
      <div className="flex justify-center my-8 mb-14">
        <div className="flex flex-col items-center gap-4">
          <Badge>FEATURES</Badge>
          <FeatureHeader />
          <AllFeatures />
        </div>
      </div>
    </>
  );
}
