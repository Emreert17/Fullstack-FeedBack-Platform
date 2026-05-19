import { apiRequest } from "../lib/api";

// All Feedback Service
export async function getAllFeedbacks({ page, limit = 10, searchValue }) {
  const searchParam = new URLSearchParams({ page, limit });

  if (searchValue) {
    searchParam.append("q", searchValue);
  }

  return apiRequest(`/api/feedback?${searchParam.toString()}`, {});
}

// My Feedback Service
export async function getMyFeedbacks({ page, limit = 10, searchValue }) {
  const searchParam = new URLSearchParams({ page, limit });

  if (searchValue) {
    searchParam.append("q", searchValue);
  }

  return apiRequest(`/api/feedback/my?${searchParam.toString()}`);
}

// All Feedback Vote Service
export async function getVote({ feedbackId }) {
  return apiRequest("/api/vote", {
    method: "POST",
    body: JSON.stringify({
      feedbackId: feedbackId,
    }),
  });
}

// Create Feedback Service
export async function createFeedbackService({ title, description, category }) {
  return apiRequest("/api/feedback", {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      category,
    }),
  });
}
