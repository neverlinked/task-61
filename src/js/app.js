import "../scss/app.scss";
window.addEventListener("DOMContentLoaded", () => {
  const hotProductsList = document.querySelectorAll(".hot");
  hotProductsList.forEach((hotProduct) => {
    hotProduct.innerHTML += '🔥';
  });
});