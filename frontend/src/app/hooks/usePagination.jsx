import { useState } from "react";

export default function usePagination(data = []) {
  const [page, setPage] = useState(1);
  const perPage = 6;

  const paginatedFeedbacks = data.slice(
    page * perPage - perPage,
    page * perPage,
  );

  const totalPages = Math.ceil(data.length / perPage) || 1;

  const handleForward = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };
  const handleBackward = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return {
    page,
    totalPages,
    paginatedFeedbacks,
    handleForward,
    handleBackward,
  };
}
