export const getColorForValue = (count) => {
  if (count >= 7) return "#1aff1a";
  if (count >= 5) return "#68d65c";
  if (count >= 3) return "#3fa23f";
  if (count >= 1) return "#2c2f36";
  return "#1a1a1a";
};
