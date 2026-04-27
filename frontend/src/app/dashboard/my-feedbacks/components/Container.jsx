"use client";
import MyFeedbackHeader from "./MyFeedbackHeader";
import MyFeedbackCard from "./MyFeedbackCard";
import MyFeedbackDetail from "./MyFeedbackDetail/MyFeedbackDetail";
import { useEffect, useState } from "react";

export default function MyFeedbacksContainer() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchMyFeedbacks = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            `/api/feedback/my?page=${page}&limit=10`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const data = await res.json();
        console.log(data);

        if (!res.ok) throw new Error("Something went wrong!");

        if (data.length === 0) {
          setHasMore(false);
        } else {
          setFeedbacks((prev) => {
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

    fetchMyFeedbacks();
  }, [page]);

  const handleDetailPage = (id) => {
    const selectedFeedback = feedbacks.find((fb) => fb._id === id);
    setSelected(selectedFeedback);
  };

  return (
    <>
      <div>
        <MyFeedbackHeader />
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-2 flex flex-col gap-3 border border-stone-200 rounded-lg h-[calc(100vh-200px)] overflow-y-auto p-6">
            {feedbacks?.map((feedback) => (
              <div
                key={feedback._id}
                onClick={() => handleDetailPage(feedback._id)}
              >
                <MyFeedbackCard feedback={feedback} />
              </div>
            ))}
            <button
              disabled={!hasMore || loading}
              onClick={() => {
                if (!loading && hasMore) {
                  setPage((prev) => prev + 1);
                }
              }}
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
            <MyFeedbackDetail selected={selected} />
          </div>
        </div>
      </div>
    </>
  );
}
