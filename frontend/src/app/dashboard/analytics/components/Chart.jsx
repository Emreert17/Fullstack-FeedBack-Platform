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
    <div className="bg-white border border-slate-200/60 rounded-xl px-4 py-2.5 shadow-lg shadow-slate-200/40">
      <p className="text-[11px] font-medium text-slate-400 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-slate-800">
        {payload[0].value}{" "}
        <span className="text-slate-400 font-normal">feedbacks</span>
      </p>
    </div>
  );
}

export default function AnalyticsChart({ data }) {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">
            Feedback Trend
          </h3>
          <p className="text-[12px] text-slate-400 mt-0.5">
            Daily submission volume
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
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
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#3b82f6",
              stroke: "#dbeafe",
              strokeWidth: 3,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
