"use client";
import { useEffect } from "react";
import AllFeedbackCard from "./AllFeedbackCard";
import AllFeedbackDetail from "./AllFeedbackDetail/AllFeedbackDetail";
import SearchFeedback from "./SearchFeedback";
import Link from "next/link";
import { TiPlus } from "react-icons/ti";
import { status_filters } from "../../../data/feedback/allfeedback";
import { filter_labels } from "../../../data/feedback/allfeedback";
import { useAllFeedbacks } from "../../../hooks/useAllFeedbacks";

export default function AllFeedbacksContainer() {
  const {
    page,
    setPage,
    searchValue,
    setSearchValue,
    inputValue,
    setInputValue,
    loading,
    hasMore,
    setHasMore,
    allFeedback,
    setAllFeedback,
    selected,
    setSelected,
    activeFilter,
    setActiveFilter,
    fetchAllFeedbacks,
    handleVote,
  } = useAllFeedbacks();

  useEffect(() => {
    fetchAllFeedbacks();
  }, [page, searchValue]);

  useEffect(() => {
    setAllFeedback([]);
    setPage(1);
    setHasMore(true);
  }, [searchValue]);

  const handleDetailPage = (id) => {
    const selectedFeedback = allFeedback.find((fb) => fb._id === id);
    setSelected(selectedFeedback);
  };

  const visibleFeedback =
    activeFilter === "all"
      ? allFeedback
      : allFeedback.filter((fb) => fb.status === activeFilter);

  return (
    <div className="grid grid-cols-6 h-screen bg-[#f8fafc]">
      {/* LEFT PANEL */}
      <div className="col-span-2 border-r border-slate-200/80 flex flex-col overflow-hidden bg-white">
        {/* PANEL HEADER */}
        <div className="flex items-center justify-between px-4 pt-5 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-[13px] font-semibold text-slate-800 leading-none">
              All Feedbacks
            </h2>
            <p className="text-[11px] text-slate-400 mt-1 tabular-nums">
              {allFeedback.length} items
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
          setInputValue={setInputValue}
          inputValue={inputValue}
          setSearchValue={setSearchValue}
        />

        {/* STATUS FILTER TABS */}
        <div className="flex items-center gap-0.5 px-3 py-2 border-b border-slate-100 overflow-x-auto no-scrollbar">
          {status_filters.map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`shrink-0 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all duration-150 ${
                activeFilter === status
                  ? "bg-slate-100 text-slate-800"
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
              }`}
            >
              {filter_labels[status]}
            </button>
          ))}
        </div>

        {/* FEED LIST */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {loading && allFeedback.length === 0 ? (
            <div className="flex items-center justify-center h-24">
              <span className="w-4 h-4 border-[1.5px] border-slate-200 border-t-slate-500 rounded-full animate-spin" />
            </div>
          ) : visibleFeedback.length === 0 ? (
            <div className="flex items-center justify-center h-24">
              <p className="text-[12px] text-slate-400">No items found</p>
            </div>
          ) : (
            visibleFeedback.map((feedback) => (
              <div
                key={feedback._id}
                onClick={() => handleDetailPage(feedback._id)}
                className="cursor-pointer"
              >
                <AllFeedbackCard
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVote(e, feedback._id);
                  }}
                  feedback={feedback}
                  isSelected={selected?._id === feedback._id}
                />
              </div>
            ))
          )}
        </div>

        {/* LOAD MORE */}
        <div className="px-4 py-3 border-t border-slate-100">
          <button
            disabled={!hasMore || loading}
            onClick={() => setPage((prev) => prev + 1)}
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
        <AllFeedbackDetail selected={selected} />
      </div>
    </div>
  );
}
