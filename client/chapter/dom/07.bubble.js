/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = document.querySelector(".visual");
const news = document.querySelector(".news");
const desc = document.querySelector(".desc");

visual.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log("%c visual", "background: dodgerblue");
});

// news.addEventListener("click", function () {
//   console.log("%c news", "background: orange");
// });

// desc.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("%c desc", "background: hotpink");
// });

/* 캡처링 ----------------------------------------------------------------- */
