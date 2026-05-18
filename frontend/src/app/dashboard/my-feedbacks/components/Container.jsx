"use client";
import MyFeedbackCard from "./MyFeedbackCard";
import MyFeedbackDetail from "./MyFeedbackDetail/MyFeedbackDetail";
import { useEffect, useState } from "react";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";
import SearchFeedback from "../../all-feedbacks/components/SearchFeedback";

const STATUS_GROUPS = [
  { key: "open", label: "Open", dot: "bg-red-400" },
  { key: "in-progress", label: "In Progress", dot: "bg-blue-400" },
  { key: "planned", label: "Planned", dot: "bg-yellow-400" },
  { key: "done", label: "Done", dot: "bg-green-400" },
];

export default function MyFeedbacksContainer() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [selected, setSelected] = useState(null);

  const url = new URL(process.env.NEXT_PUBLIC_API_URL + "/api/feedback/my");

  url.searchParams.append("page", page);
  url.searchParams.append("limit", 10);

  if (searchValue) {
    url.searchParams.append("q", searchValue);
  }

  useEffect(() => {
    const fetchMyFeedbacks = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const res = await fetch(url.toString(), {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

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
  }, [page, searchValue]);

  useEffect(() => {
    setFeedbacks([]);
    setPage(1);
    setHasMore(true);
  }, [searchValue]);

  const handleDetailPage = (id) => {
    const selectedFeedback = feedbacks.find((fb) => fb._id === id);
    setSelected(selectedFeedback);
  };

  const groupedFeedbacks = STATUS_GROUPS.map((group) => ({
    ...group,
    items: feedbacks.filter((fb) => fb.status === group.key),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="grid grid-cols-6 h-screen bg-[#f8fafc]">
      {/* LEFT PANEL */}
      <div className="col-span-2 border-r border-slate-200/80 flex flex-col overflow-hidden bg-white">
        {/* PANEL HEADER */}
        <div className="flex items-center justify-between px-4 pt-5 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-[13px] font-semibold text-slate-800 leading-none">
              My Feedbacks
            </h2>
            <p className="text-[11px] text-slate-400 mt-1 tabular-nums">
              {feedbacks.length} items
            </p>
          </div>
          <Link
            href="/dashboard/create-feedback"
            className="flex items-center gap-1 text-[11px] font-medium text-white bg-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-700 transition-colors duration-150"
          >
            <TiPlus size={13} />
            New
          </Link>
        </div>

        {/* SEARCH */}
        <SearchFeedback
          inputValue={inputValue}
          setSearchValue={setSearchValue}
          setInputValue={setInputValue}
        />

        {/* GROUPED LIST */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {loading && feedbacks.length === 0 ? (
            <div className="flex items-center justify-center h-24">
              <span className="w-4 h-4 border-[1.5px] border-slate-200 border-t-slate-500 rounded-full animate-spin" />
            </div>
          ) : feedbacks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 gap-2">
              <p className="text-[12px] text-slate-400">No feedbacks yet</p>
              <Link
                href="/dashboard/create-feedback"
                className="text-[11px] font-medium text-slate-500 underline underline-offset-2 hover:text-slate-800 transition-colors"
              >
                Create your first
              </Link>
            </div>
          ) : (
            groupedFeedbacks.map((group) => (
              <div key={group.key}>
                {/* GROUP HEADER */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-slate-100 sticky top-0 z-10">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${group.dot} shrink-0`}
                  />
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex-1">
                    {group.label}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium tabular-nums">
                    {group.items.length}
                  </span>
                </div>

                {/* GROUP ITEMS */}
                {group.items.map((feedback) => (
                  <div
                    key={feedback._id}
                    onClick={() => handleDetailPage(feedback._id)}
                    className="cursor-pointer"
                  >
                    <MyFeedbackCard
                      feedback={feedback}
                      isSelected={selected?._id === feedback._id}
                    />
                  </div>
                ))}
              </div>
            ))
          )}
        </div>

        {/* LOAD MORE */}
        <div className="px-4 py-3 border-t border-slate-100">
          <button
            disabled={!hasMore || loading}
            onClick={() => {
              if (!loading && hasMore) {
                setPage((prev) => prev + 1);
              }
            }}
            className={`w-full py-2 text-[12px] font-medium rounded-lg transition-all duration-150 ${
              loading || !hasMore
                ? "text-slate-300 cursor-not-allowed"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-3 h-3 border-[1.5px] border-slate-300 border-t-slate-600 rounded-full animate-spin" />
                Loading
              </span>
            ) : hasMore ? (
              "Load more"
            ) : (
              "All caught up"
            )}
          </button>
        </div>
      </div>

      {/* DETAIL PANEL */}
      <div className="col-span-4 overflow-y-auto">
        <MyFeedbackDetail selected={selected} />
      </div>
    </div>
  );
}
