export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Something went wrong!");

  return data;
}
