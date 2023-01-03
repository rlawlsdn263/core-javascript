/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime = LATE_NIGHT;

// switch (thisTime) {
//   case "아침":
//     console.log("디스코드를 켠다.");
//     break;

//   case "점심":
//     console.log("자주 가는 식당에 가서 식사를 한다.");
//     break;

//   case "저녁":
//     console.log("헬스장을 간다.");
//     break;

//   case "밤":
//     console.log("모각코를 하며 수업내용을 복습한다.");
//     break;

//   case "심야":
//   case "새벽":
//     console.log("나올 타이밍을 놓쳐 디스코드 방에 갇혀있다.");
//     break;
// }

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

// if (thisTime === "아침") {
//   console.log("디스코드를 켠다.");
// } else if (thisTime === "점심") {
//   console.log("밥을 먹는다.");
// } else if (thisTime === "저녁") {
//   console.log("동네 한바퀴를 조깅한다");
// } else if (thisTime === "밤") {
//   console.log("친구랑 통화를 한다.");
// } else if (thisTime === "심야" || thisTime === "새벽") {
//   console.log("한밤 중이거나, 자고 있을듯");
// } else {
//   console.log("뭐하고 있니?");
// }

/* switch vs. if -------------------------------------------------------- */

// 임의 숫자를 넣어서 무슨 요일인지 알려주는 함수를 만들어보자

function getRandom(n) {
  return Math.round(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return "일";

    case 1:
      return "월";

    case 2:
      return "화";

    case 3:
      return "수";
    case 4:
      return "목";

    case 5:
      return "금";

    case 6:
      return "토";
  }
}

let result = getDay(getRandom(6));
console.log(result);

switch (false) {
  case false:
    console.log("드가자");
    break;
}
