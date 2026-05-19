import { apiRequest } from "../lib/api";
// Profile Service GET
export async function getProfile() {
  return apiRequest("/api/profile");
}

// Complete Profile Service POST
export async function completeProfile({
  jobtitle,
  department,
  companyname,
  companysize,
  country,
  city,
  bio,
}) {
  return apiRequest("/api/profile", {
    method: "POST",
    body: JSON.stringify({
      jobtitle,
      department,
      companyname,
      companysize,
      country,
      city,
      bio,
    }),
  });
}
