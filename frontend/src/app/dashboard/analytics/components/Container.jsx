"use client";
import { useEffect, useState } from "react";
import AnalyticsHeader from "./AnlayticsHeader";
import AnalyticsChart from "./Chart";
import RecentCategories from "./FeedbackCategories/FeedbackCategories";
import KPICards from "./kpiCards";

export default function AnalyticsContainer() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const getAnalyticsData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/analytics",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        setAnalytics(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAnalyticsData();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <AnalyticsHeader />

      {/* KPI row */}
      <div className="grid grid-cols-4 gap-4">
        {analytics.kpiCards?.map((card) => (
          <KPICards key={card.id} card={card} />
        ))}
      </div>

      {/* Chart */}
      <AnalyticsChart data={analytics.dailyFeedback} />

      {/* Categories — half width */}
      <div className="grid grid-cols-2 gap-4">
        <RecentCategories data={analytics.category} />
      </div>
    </div>
  );
}
