import React from "react";

export default function FeatureCard({ feature }) {
  return (
    <div
      className="group border border-stone-200 rounded-2xl px-4 py-8 bg-white 
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl 
                        bg-blue-50 text-blue-600 
                        group-hover:bg-blue-600 group-hover:text-white transition"
        >
          {React.createElement(feature.icon, { size: 22 })}
        </div>

        <h4 className="text-stone-800 font-semibold text-lg">
          {feature.title}
        </h4>

        <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
