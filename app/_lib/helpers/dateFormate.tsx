export const dateFormate = (date: string) => {
  if (!date) return;
  const newDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return newDate;
};
