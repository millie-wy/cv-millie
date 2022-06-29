export const displayElement = (yPos) => {
  if (window.scrollY > yPos) return true;
  return false;
};
