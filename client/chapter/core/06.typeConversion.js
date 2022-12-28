/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> 2022
const YEAR = 2022;
console.log(typeof String(YEAR));

// undefined -> 'undefeind'
//null -> 'null'

let days = null;
console.log(String(days));

// boolean -> 'true' or 'false'
let isKind = true;
console.log(String(isKind));
console.log(isKind + ""); //형변환이 된다.

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean -> true : 1/ false : 0
// *1
// /1
// +
let cutie = true;
console.log(cutie * 1);
console.log(cutie / 1);
console.log(+cutie);

// string 문자형 숫자
let num = "123";
console.log(num * 1);
console.log(num / 1);

let num2 = "       234";
console.log(num2 * 1);

// numeric string
let width = "320px";
console.log(parseInt(width, 10)); //320

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' -> false
// 위에 나열한 것 이외의 것들

console.log(Boolean(null)); //false
console.log(Boolean("")); //false
console.log(Boolean("   ")); //true
console.log(!!null); //false
console.log(!!"   "); //true
