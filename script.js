const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexBtn = document.querySelector(".hexBtn");
const body = document.querySelector("body");
const hex = document.querySelector(".hex");

// adding functionality to button to generate hex numbers and change background color
function generateHex() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexColor += hexNumbers[random];
    body.style.backgroundColor = hexColor;
    hex.innerHTML = hexColor;
  }
}

// event listener applied on the button to generate hex color and change background color
hexBtn.addEventListener("click", generateHex);
