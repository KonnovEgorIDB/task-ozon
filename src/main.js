import "./style.css";
import Progress from "./api.js";

const progress = new Progress(".progress__view", { value: 75 });

const input = document.querySelector("#input-value");
const switchHide = document.querySelector("#switch-hide");
const switchAnimate = document.querySelector("#switch-animate");

input.addEventListener("input", (e) => {
  const value = Number(e.target.value);
  if (!isNaN(value) && value >= 0 && value <= 100) {
    progress.setValue(value);
  } else {
    e.target.value = progress.getValue();
  }
});

switchHide.addEventListener("change", (e) => {
  if (e.target.checked) {
    progress.setHidden(true);
  } else {
    progress.setHidden(false);
  }
});



switchAnimate.addEventListener("change", (e) => {
  if (e.target.checked) {

    input.setAttribute("disabled", true);
    input.value = null;

    progress.setAnimated(true);

  } else {
    progress.setAnimated(false);
    input.removeAttribute("disabled");
    input.value = progress.getValue();

  }
});
