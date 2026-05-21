"use client";

import { useAnalytics } from "../../../hooks/useAnalytics";
import AnalyticsHeader from "./AnlayticsHeader";
import AnalyticsChart from "./Chart";
import RecentCategories from "./FeedbackCategories/FeedbackCategories";
import KPICards from "./kpiCards";

export default function AnalyticsContainer() {
  const { analytics } = useAnalytics();

  return (
    <div className="flex flex-col gap-8">
      <AnalyticsHeader />

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {analytics.kpiCards?.map((card) => (
          <KPICards key={card.id} card={card} />
        ))}
      </div>

      {/* Chart + Categories row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <AnalyticsChart data={analytics.dailyFeedback} />
        </div>
        <div className="lg:col-span-1">
          <RecentCategories data={analytics.category} />
        </div>
      </div>
    </div>
  );
}
