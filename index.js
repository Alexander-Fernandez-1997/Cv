var toggle = document.getElementById("container");
var toggleContainer = document.getElementById("toggle-container");
var toggleNumber;
const eng = document.getElementById("eng");
const esp = document.getElementById("esp");

toggle.addEventListener("click", function () {
  toggleNumber = !toggleNumber;
  if (toggleNumber) {
    toggleContainer.style.clipPath = "inset(0 0 0 50%)";
    toggleContainer.style.backgroundColor = "#D74046";
    eng.style.display = "none";
    esp.style.display = "block";
    esp.scrollIntoView();
  } else {
    toggleContainer.style.clipPath = "inset(0 50% 0 0)";
    toggleContainer.style.backgroundColor = "dodgerblue";
    esp.style.display = "none";
    eng.style.display = "block";
    eng.scrollIntoView();
  }
  console.log(toggleNumber);
});
