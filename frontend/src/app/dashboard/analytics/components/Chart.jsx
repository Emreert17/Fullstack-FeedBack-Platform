"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white border border-slate-200/70 rounded-xl px-3.5 py-3 shadow-lg shadow-slate-200/60">
      <p className="text-[11px] font-medium text-slate-400 mb-1">{label}</p>
      <p className="text-[14px] font-bold text-slate-900">
        {payload[0].value}{" "}
        <span className="text-slate-400 font-normal text-[12px]">feedbacks</span>
      </p>
    </div>
  );
}

export default function AnalyticsChart({ data }) {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl px-6 pt-6 pb-2 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-[15px] font-semibold text-slate-900 leading-none">
            Feedback Trend
          </h3>
          <p className="text-[12px] text-slate-500 mt-1.5">
            Daily submission volume
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200/60 px-2.5 py-1.5 rounded-lg select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          Last 30 days
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 4, right: 8, left: -16, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            stroke="#f1f5f9"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#94a3b8" }}
            dy={8}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#94a3b8" }}
            dx={-4}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: "#3b82f6",
              stroke: "#dbeafe",
              strokeWidth: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
