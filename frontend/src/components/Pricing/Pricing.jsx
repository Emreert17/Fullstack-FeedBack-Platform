import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import Badge from "../Badge/Badge";
import PricingHeader from "./components/PricingHeader";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Perfect for trying out feedly and exploring basic insights.",
    features: [
      "Analyze up to 50 feedbacks",
      "Understand general sentiment",
    ],
    cta: "Get Started",
    href: "/register",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description:
      "Ideal for growing teams who want to act on customer feedback.",
    features: [
      "Analyze up to 500 feedbacks",
      "Discover top customer issues",
      "Get actionable suggestions",
    ],
    cta: "Start Free Trial",
    href: "/register",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description:
      "For teams that need full power, deep analytics, and complete control.",
    features: [
      "Unlimited feedback analysis",
      "Advanced insights & trends",
      "Export data",
    ],
    cta: "Upgrade Now",
    href: "/register",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Badge>PRICING</Badge>
        <PricingHeader />

        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1
                ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-xl shadow-brand-500/20 ring-2 ring-brand-500 scale-[1.03]"
                    : "bg-white text-stone-900 shadow-sm ring-1 ring-stone-200 hover:shadow-lg hover:ring-brand-200"
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name */}
              <h3
                className={`text-lg font-semibold mb-1 ${
                  plan.highlighted ? "text-brand-100" : "text-stone-500"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-brand-200" : "text-stone-400"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  plan.highlighted ? "text-brand-100" : "text-stone-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${
                  plan.highlighted ? "bg-white/15" : "bg-stone-200"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <FiCheck
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-brand-200" : "text-brand-600"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-white/90" : "text-stone-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={plan.href}
                className={`block text-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer
                  ${
                    plan.highlighted
                      ? "bg-white text-brand-700 hover:bg-brand-50 shadow-sm"
                      : "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-md hover:shadow-brand-500/20"
                  }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
