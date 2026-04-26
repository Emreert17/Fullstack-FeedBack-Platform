"use client";
import useFeedback from "../../../hooks/useFeedback";
import MyFeedbackHeader from "./MyFeedbackHeader";
import MyFeedbackCard from "./MyFeedbackCard";
import MyFeedbackDetail from "./MyFeedbackDetail/MyFeedbackDetail";
import { useState } from "react";

export default function MyFeedbacksContainer() {
  const [selected, setSelected] = useState(null);
  const { feedbacks } = useFeedback();

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
          </div>
          <div className="col-span-3">
            <MyFeedbackDetail selected={selected} />
          </div>
        </div>
      </div>
    </>
  );
}
