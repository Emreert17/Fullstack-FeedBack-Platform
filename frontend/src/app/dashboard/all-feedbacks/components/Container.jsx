"use client";
import { useEffect, useState } from "react";
import AllFeedbackCard from "./AllFeedbackCard";
import AllFeedbackHeader from "./AllFeedbackHeader";

export default function Container() {
  const [voteCount, setVoteCount] = useState("");
  const [allFeedback, setAllFeedback] = useState([]);
  const [feedbackId, setFeedbackId] = useState("");

  useEffect(() => {
    const fetchAllFeedbacks = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/feedback",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (!res.ok) {
          console.log("Error");
        }
        const data = await res.json();
        setAllFeedback(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllFeedbacks();
  }, []);

  const handleVote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          feedbackId: feedbackId,
        }),
      });
      console.log(feedbackId);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setVoteCount(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <AllFeedbackHeader />
        <div className="grid grid-cols-2 gap-6">
          {allFeedback.length > 0 &&
            allFeedback.map((feedback) => (
              <AllFeedbackCard
                handleVote={handleVote}
                key={feedback._id}
                feedback={feedback}
                setFeedbackId={setFeedbackId}
                voteCount={voteCount.voteCount || 0}
              />
            ))}
        </div>
      </div>
    </>
  );
}
