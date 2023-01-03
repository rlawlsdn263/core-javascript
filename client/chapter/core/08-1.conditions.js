/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let number = Number(prompt("숫자를 입력해주세요", 0));

// let message =
//   number > 0
//     ? console.log("1")
//     : number < 0
//     ? console.log("-1")
//     : console.log("뭥미?");

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "no";

// 영화 볼거니?
let goingToWatchMovie = "yes";

if (didWatchMovie == "yes") {
  // if 문(statement)
  console.log("그거 재밌더라?");
} else if (goingToWatchMovie == "yes") {
  // else if 복수 조건 처리
  console.log("너무 설렌다");
} else {
  //else 절 (clause)
  console.log("난 별로");
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
