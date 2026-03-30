export const getFeedbacks = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/feedback/my",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!res.ok) {
    const errorData = await res.json();
    console.log(errorData.message);
    return;
  }
  return res.json();
};
