import React from "react";

export default function FeatureCard({ feature }) {
  return (
    <div
      className="group relative bg-white border border-stone-200/80 rounded-2xl p-6
                    hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 hover:border-brand-200
                    transition-all duration-300 cursor-default"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl
                        bg-brand-50 text-brand-600
                        group-hover:bg-brand-600 group-hover:text-white
                        transition-all duration-300"
        >
          {React.createElement(feature.icon, { size: 22 })}
        </div>

        <h4 className="text-stone-900 font-semibold text-lg">
          {feature.title}
        </h4>

        <p className="text-stone-500 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
