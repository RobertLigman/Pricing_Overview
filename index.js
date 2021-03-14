const switchBall = document.querySelector("#switchBall");
const annually = document.querySelector(".annually");
const monthly = document.querySelector(".monthly");
const cards = [...document.querySelectorAll(".card")];

const toggleActiveCard = (e) => {
  cards.forEach((item) => item.classList.remove("card__active"));
  e.target.classList.add("card__active");
};
cards.forEach((item) => {
  item.addEventListener("click", (e) => toggleActiveCard(e));
});

let state = false;

const displayCard = () => {
  if (state) {
    // annually.style.display = "none";
    // monthly.style.opacity = "0";
    // monthly.style.display = "block";
    // monthly.style.opacity = "1";
    annually.classList.remove("active");
    monthly.classList.add("active");
  } else {
    monthly.classList.remove("active");
    annually.classList.add("active");
    // annually.style.display = "block";
    // monthly.style.opacity = "1";
    // monthly.style.display = "none";
    // monthly.style.opacity = "0";
  }
};

const toggleState = () => {
  state = !state;
  displayCard();
};
switchBall.addEventListener("click", toggleState);
