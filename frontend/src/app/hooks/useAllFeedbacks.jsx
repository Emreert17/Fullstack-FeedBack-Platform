import { useState } from "react";
import { getAllFeedbacks, getVote } from "../services/feedbackService";
import { toast } from "sonner";

export function useAllFeedbacks() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [allFeedback, setAllFeedback] = useState([]);
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const fetchAllFeedbacks = async () => {
    try {
      setLoading(true);

      const data = await getAllFeedbacks({
        page,
        searchValue,
      });

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
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (e, feedbackId) => {
    e.preventDefault();

    try {
      const data = await getVote({ feedbackId });

      setAllFeedback((prev) =>
        prev.map((fb) =>
          fb._id === feedbackId
            ? {
                ...fb,
                voteCount: data.voteCount,
                voted: data.voted,
              }
            : fb,
        ),
      );
    } catch (err) {
      toast.error(err.message);
    }
  };

  return {
    page,
    setPage,
    searchValue,
    setSearchValue,
    inputValue,
    setInputValue,
    loading,
    setLoading,
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
  };
}
