"use client";
import FeedbackCard from "./FeedbackCard";
import usePagination from "../../../hooks/usePagination";
import Pagination from "./Pagination";
import useFeedback from "../../../hooks/useFeedback";

export default function Feedbacks() {
  const { feedbacks } = useFeedback();
  const {
    page,
    totalPages,
    paginatedFeedbacks,
    handleForward,
    handleBackward,
  } = usePagination(feedbacks);

  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          {paginatedFeedbacks.map((feedback) => (
            <FeedbackCard key={feedback.title} feedback={feedback} />
          ))}
        </div>

        {feedbacks?.length > 4 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            handleForward={handleForward}
            handleBackward={handleBackward}
          />
        )}
      </div>
    </>
  );
}
