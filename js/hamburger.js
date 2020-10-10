// Elements
const burgerButton = document.querySelector('.burger');
const body = document.body;


//Events

burgerButton.addEventListener("click", menuToggle);

// //Execution

function menuToggle(_event) {
  body.classList.toggle("menu-open");
}