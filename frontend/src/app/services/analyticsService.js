import { apiRequest } from "../lib/api";

// Analytics Service
export async function getAnalytics() {
  return apiRequest("/api/analytics");
}
