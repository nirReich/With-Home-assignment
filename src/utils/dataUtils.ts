export const getHourFromDate = (dateString: string): string => {
  const date = new Date(dateString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
};

export const formatDate = (
  dateString: string,
  dateOptions: Record<string, string>
) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("he-IL", dateOptions);
};
