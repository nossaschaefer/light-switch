let button = document.querySelector("button");
let body = document.querySelector("body");
button.addEventListener("click", function (event) {
  body.classList.toggle("black");
  this.classList.toggle("yellow");
  this.classList.toggle("black");
});

let originalTitle = "Good Morning";
let newTitle = "Good Night";

// Add an event listener to the button
button.addEventListener("click", function () {
  // Toggle between the original and new title
  if (document.title === originalTitle) {
    document.title = newTitle;
  } else {
    document.title = originalTitle;
  }
});
