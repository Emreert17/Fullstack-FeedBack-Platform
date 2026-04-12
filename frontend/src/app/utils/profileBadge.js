export const profileBadgeTransformation = (word) => {
  return (
    word.split(" ")[0].slice(0, 1).toUpperCase() +
    word.split(" ")[1].slice(0, 1).toUpperCase()
  );
};
