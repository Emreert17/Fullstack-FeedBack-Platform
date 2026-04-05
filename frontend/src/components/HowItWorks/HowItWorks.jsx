import Badge from "../Badge/Badge";
import HowItWorksHeader from "./components/HowItWorksHeader";
import Phases from "./components/Phases";

export default function HowItWorks() {
  return (
    <>
      <div className="flex justify-center my-8 mb-14">
        <div className="flex flex-col gap-4">
          <Badge>HOW IT WORKS</Badge>
          <HowItWorksHeader />
          <Phases />
        </div>
      </div>
    </>
  );
}
