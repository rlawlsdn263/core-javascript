/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// const ball = document.querySelector(".ground img");
// console.log(ball);

// const ground = document.querySelector(".ground");
// const ball = document.querySelector(".ground img");

// ground.addEventListener("click", (e) => {
//   let positionX = e.offsetX;
//   let positionY = e.offsetY;

//   ball.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;
//   console.log(positionX, positionY);
// });

// ground.addEventListener("mousemove", (e) => {
//   let positionX = e.offsetX;
//   let positionY = e.offsetY;
//   console.log(positionX, positionY);
// });
