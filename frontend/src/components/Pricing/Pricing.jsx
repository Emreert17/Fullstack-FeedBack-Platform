import Badge from "../Badge/Badge";
import PricingHeader from "./components/PricingHeader";
import { plans } from "../../app/data/data";
import PricingCard from "./components/PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Badge>PRICING</Badge>
        <PricingHeader />

        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-4">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
