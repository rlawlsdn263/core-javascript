import { diceAnimation } from "./lib/index.js";

const diceBtn = document.querySelector(".buttonGroup > button:first-child");
const recordBtn = document.querySelector(".buttonGroup > button:nth-child(2)");
const recordListWrapper = document.querySelector(".recordListWrapper");

recordBtn.disabled = false;

recordBtn.addEventListener("click", () => {
  recordListWrapper.hidden = false;
  if (recordListWrapper.hidden === false) {
    console.log();
  }
});

diceBtn.addEventListener("click", () => {
  diceAnimation();
});
