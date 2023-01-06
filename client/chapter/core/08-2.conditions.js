/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 32;

// if (age >= 14 && age <= 90) {
//   console.log(age);
// } else {
//   console.log("ㅂ2");
// }

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

// let userName = prompt("아이디를 입력하세요");
// let pw = prompt("비밀번호를 입력하세요");

// if (userName === "Admin" && pw === "TheMaster") {
//   alert("환영합니다 주인님");
// } else if (userName === "Admin" && pw !== "TheMaster") {
//   alert("비밀번호가 틀렸습니다");
// } else {
//   alert("당신은 내 주인이 아니야");
// }

let userName = prompt("사용자 아이디를 입력해주세요");

if (userName === "Admin") {
  let pw = prompt("비밀번호를 입력해주세요.");
  if (pw === "TheMaster") {
    console.log("환영합니다!");
  } else {
    console.log("비밀번호가 틀렸습니다");
  }
} else if (userName === " " || userName === null) {
  console.log("취소했습니다");
} else {
  console.log("인증되지 않은 사용자입니다");
}

console.log(userName);