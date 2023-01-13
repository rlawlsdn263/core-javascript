const firstValue = document.querySelector("#firstNumber");
const secondValue = document.querySelector("#secondNumber");
const done = document.querySelector("#done");
const result = document.querySelector(".result");

function add(num1, num2) {
  return num1 + num2;
}

function handler(e) {
  e.preventDefault();
  let num1 = +firstValue.value;
  let num2 = +secondValue.value;
  let total = add(num1, num2);

  // result.textContent = add(num1, num2);

  clearContext();
  result.insertAdjacentHTML("beforeend", total);

  firstValue.value = null;
  secondValue.value = null;
}

done.addEventListener("click", handler);
