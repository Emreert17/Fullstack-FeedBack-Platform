"use client";
import { useEffect, useState } from "react";
import AllFeedbackCard from "./AllFeedbackCard";
import AllFeedbackHeader from "./AllFeedbackHeader";
import AllFeedbackDetail from "./AllFeedbackDetail/AllFeedbackDetail";

export default function AllFeedbacksContainer() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [allFeedback, setAllFeedback] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchAllFeedbacks = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            `/api/feedback?page=${page}&limit=10`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const data = await res.json();

        if (!res.ok) throw new Error("Something went wrong!");

        if (data.length === 0) {
          setHasMore(false);
        } else {
          setAllFeedback((prev) => {
            const newData = [...prev, ...data];

            const uniqueData = newData.filter(
              (item, index, self) =>
                index === self.findIndex((f) => f._id === item._id),
            );

            return uniqueData;
          });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllFeedbacks();
  }, [page]);

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
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2 flex flex-col gap-3 border border-stone-200 rounded-lg h-[calc(100vh-200px)] overflow-y-auto p-6">
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
            <button
              disabled={!hasMore || loading}
              onClick={() => setPage((prev) => prev + 1)}
              className={`
                   relative flex items-center justify-center
                   px-5 py-2.5 rounded-lg text-sm font-medium
                   transition-all duration-200
                   border border-transparent

              ${
                loading || !hasMore
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800 active:scale-[0.98]"
              }

                   shadow-sm hover:shadow-md
              `}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Loading...
                </span>
              ) : hasMore ? (
                "Load More"
              ) : (
                "No More Data"
              )}
            </button>
          </div>
          <div className="col-span-3">
            <AllFeedbackDetail selected={selected} />
          </div>
        </div>
      </div>
    </>
  );
}
