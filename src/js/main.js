var yellowHeader = document.querySelector(".l-header-yellow");

function changeColor() {
  yellowHeader.classList.toggle("is-active");
}

yellowHeader.addEventListener("click", changeColor);

// var flavoursCard = document.querySelectorAll(".flavours-card");
// function openInfos() {
//   flavoursCard.forEach(function () {
//     flavoursCard.classList.toggle("is-active");
//   });
// }

// flavoursCard.addEventListener("click", openInfos);

var flavoursCards = document.querySelectorAll(".flavours-card");

function openInfos(event) {
  event.currentTarget.classList.toggle("is-active");
}

flavoursCards.forEach(function (card) {
  card.addEventListener("click", openInfos);
});

var redCard = document.querySelector(".l-card-red");

function changeCardRedColor() {
  redCard.classList.toggle("is-active");
}

redCard.addEventListener("click", changeCardRedColor);

var blueCard = document.querySelector(".l-card-blue");

function changeCardBlueColor() {
  blueCard.classList.toggle("is-active");
}

blueCard.addEventListener("click", changeCardBlueColor);
