export const profileBadgeTransformation = (word) => {
  if (!word) return "";
  const parts = word.split(" ");
  return (
    (parts[0]?.[0] || "").toUpperCase() + (parts[1]?.[0] || "").toUpperCase()
  );
};
