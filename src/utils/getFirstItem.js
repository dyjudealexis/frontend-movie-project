export const getFirstItem = (str) => {
  if (!str) return "";
  const items = str.split(",").map((item) => item.trim().toLowerCase());
  return items[0];
};
