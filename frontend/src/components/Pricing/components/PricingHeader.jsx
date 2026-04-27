export default function PricingHeader() {
  return (
    <div className="flex flex-col items-center gap-3 pb-4">
      <h3 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight text-center">
        Simple, transparent pricing
      </h3>
      <p className="text-stone-500 text-sm md:text-base text-center max-w-lg">
        No hidden fees, no surprises — pick a plan that fits your team and
        start turning feedback into action.
      </p>
    </div>
  );
}
