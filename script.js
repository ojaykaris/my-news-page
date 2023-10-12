const toggleButton = document.getElementById("toggle-btn");
const cancelButton = document.getElementById("cancel-btn");
const menuDisplay = document.getElementById("menu");
toggleButton.addEventListener("click", function () {
  menuDisplay.classList.add("show");
});
cancelButton.addEventListener("click", function () {
  menuDisplay.classList.remove("show");
});
