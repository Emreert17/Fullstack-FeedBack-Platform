import { useEffect, useState } from "react";
import { getAnalytics } from "../services/analyticsService";

export function useAnalytics() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const getAnalyticsData = async () => {
      try {
        const data = await getAnalytics();
        setAnalytics(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getAnalyticsData();
  }, []);

  return { analytics };
}
