const submitBtn = document.querySelector(".button");
const card_1 = document.querySelector(".rating-state");
const card_2 = document.querySelector(".thank-you-state");
const ratingBtns = document.querySelectorAll(".btn");
let stars_score;
const score = document.querySelector(".score");

submitBtn.addEventListener("click", () => {
  if (stars_score !== undefined) {
    card_1.classList.add("off");
    score.textContent = stars_score;
    console.log(stars_score);
    card_2.classList.remove("off");
  }
});

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtn);
});

function handleRatingBtn(event) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("selected");
  });

  if (event.target.classList.contains("btn")) {
    event.target.classList.add("selected");
  } else {
    event.target.parentElement.classList.add("selected");
  }

  stars_score = event.target.value;
}
