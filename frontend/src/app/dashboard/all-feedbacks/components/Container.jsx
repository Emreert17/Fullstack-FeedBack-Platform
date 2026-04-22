"use client";
import { useEffect, useState } from "react";
import AllFeedbackCard from "./AllFeedbackCard";
import AllFeedbackHeader from "./AllFeedbackHeader";
import AllFeedbackDetail from "./AllFeedbackDetail/AllFeedbackDetail";

export default function AllFeedbacksContainer() {
  const [allFeedback, setAllFeedback] = useState([]);
  const [selected, setSelected] = useState(null);

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
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllFeedbacks();
  }, []);

  const handleVote = async (e, feedbackId) => {
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
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      console.log(data);
      setAllFeedback((prev) =>
        prev.map((fb) =>
          fb._id === feedbackId
            ? { ...fb, voteCount: data.voteCount, voted: data.voted }
            : fb,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDetailPage = (id) => {
    const selectedFeedback = allFeedback.find((fb) => fb._id === id);
    setSelected(selectedFeedback);
  };

  return (
    <>
      <div>
        <AllFeedbackHeader />
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-5 border border-stone-200 rounded-lg h-[650px] overflow-y-auto p-6">
            {allFeedback.length > 0 &&
              allFeedback.map((feedback) => (
                <div
                  onClick={() => handleDetailPage(feedback._id)}
                  key={feedback._id}
                  className="cursor-pointer"
                >
                  <AllFeedbackCard
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVote(e, feedback._id);
                    }}
                    feedback={feedback}
                  />
                </div>
              ))}
          </div>
          <div>
            <AllFeedbackDetail selected={selected} />
          </div>
        </div>
      </div>
    </>
  );
}
