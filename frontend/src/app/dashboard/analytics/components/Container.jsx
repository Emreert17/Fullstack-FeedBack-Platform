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
