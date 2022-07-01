export const displayElement = (yPos) => {
  console.log(window.scrollY);
  if (window.scrollY > yPos) return true;
  return false;
};

// export const displayElement = (elementId) => {
//   const main = document.getElementById("main");
//   const prevEl = document.getElementById("jobs-pt");
//   const element = document.getElementById(elementId);
//   //const element = document.getElementById("jobs-pt");

//   if (!element) return;

//   const yPos =
//     element.getBoundingClientRect().top - main.getBoundingClientRect().top;
//   // console.log("yPos " + yPos);
//   console.log("scrollY " + window.scrollY);

//   if (window.scrollY >= yPos) return true;
//   return false;
// };
