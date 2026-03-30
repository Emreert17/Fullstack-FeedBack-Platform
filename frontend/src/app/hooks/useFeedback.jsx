import { useEffect, useState } from "react";
import { getFeedbacks } from "../services/feedbackService";

export default function useFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const data = await getFeedbacks();
        setFeedbacks(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFeedbacks();
  }, []);

  return { feedbacks };
}
