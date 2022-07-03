export const displayElement = (yPos) => {
  const y = window.scrollY;
  const winH = window.innerHeight;
  const docH = document.body.offsetHeight;
  let scrollPercent = y / (docH - winH);

  if (window.scrollY > yPos || scrollPercent > 0.95) return true;
  return false;
};
