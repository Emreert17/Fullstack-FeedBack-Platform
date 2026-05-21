import { useState } from "react";
import { getMyFeedbacks } from "../services/feedbackService";
import { toast } from "sonner";

export function useMyFeedbacks() {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchMyFeedbacks = async () => {
    try {
      setLoading(true);

      const data = await getMyFeedbacks({ page, searchValue });

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
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    page,
    setPage,
    fetchMyFeedbacks,
    inputValue,
    searchValue,
    setSearchValue,
    setInputValue,
    loading,
    feedbacks,
    setFeedbacks,
    hasMore,
    selected,
    setSelected,
    setHasMore,
  };
}
