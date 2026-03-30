export const formattedDate = (date) => {
  return new Date(date).toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
