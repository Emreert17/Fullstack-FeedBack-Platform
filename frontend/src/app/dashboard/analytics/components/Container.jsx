"use client";
import { useEffect, useState } from "react";
import AnalyticsHeader from "./AnlayticsHeader";
import AnalyticsChart from "./Chart";
import RecentCategories from "./FeedbackCategories/FeedbackCategories";
import KPICards from "./kpiCards";

export default function AnalyticsContainer() {
  const [analytics, setAnalytics] = useState([]);
  useEffect(() => {
    const getAnalyticgetAnalyticsData = async () => {
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
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAnalyticgetAnalyticsData();
  }, []);
  return (
    <>
      <div>
        <AnalyticsHeader />
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-6 py-4">
            {analytics.kpiCards?.map((card) => (
              <KPICards key={card.label} card={card} />
            ))}
          </div>
          <div>
            <AnalyticsChart
              data={analytics.dailyFeedback && analytics.dailyFeedback}
            />
          </div>
          <div className="grid grid-cols-2">
            <RecentCategories />
          </div>
        </div>
      </div>
    </>
  );
}
