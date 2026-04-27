import Badge from "../Badge/Badge";
import HowItWorksHeader from "./components/HowItWorksHeader";
import Phases from "./components/Phases";

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Badge>HOW IT WORKS</Badge>
        <HowItWorksHeader />
        <Phases />
      </div>
    </section>
  );
}
