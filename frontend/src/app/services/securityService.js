import { apiRequest } from "../lib/api";

// Security Service
export async function updatePassword({
  password,
  newpassword,
  confirmpassword,
}) {
  return apiRequest("/api/password/update", {
    method: "POST",
    body: JSON.stringify({
      password,
      newpassword,
      confirmpassword,
    }),
  });
}
