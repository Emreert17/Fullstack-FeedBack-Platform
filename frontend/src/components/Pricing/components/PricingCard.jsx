import { FiCheck } from "react-icons/fi";
import Link from "next/link";
export default function PricingCard({ plan }) {
  const highlighted = plan.highlighted;
  return (
    <>
      <div
        key={plan.name}
        className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1
                ${
                  highlighted
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
            highlighted ? "text-brand-100" : "text-stone-500"
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
                highlighted ? "text-brand-200" : "text-stone-400"
              }`}
            >
              {plan.period}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-6 ${
            highlighted ? "text-brand-100" : "text-stone-500"
          }`}
        >
          {plan.description}
        </p>

        {/* Divider */}
        <div
          className={`h-px mb-6 ${
            highlighted ? "bg-white/15" : "bg-stone-200"
          }`}
        />

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature) => (
            <li key={feature.id} className="flex items-start gap-3 text-sm">
              <FiCheck
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  highlighted ? "text-brand-200" : "text-brand-600"
                }`}
              />
              <span
                className={highlighted ? "text-white/90" : "text-stone-600"}
              >
                {feature.feature}
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
    </>
  );
}
