let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("통신 성공!"), 3000);
  // setTimeout(() => reject(new Error("에러 발생")), 3000);
});

console.log(promise);
