//xhr
const xhr = new XMLHttpRequest();
//console.log(xhr);

//비동기 통신 오픈
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.addEventListener("readystatechange", () => {
  //console.log(xhr.readyState);
  //console.log(xhr.status);

  //xhr.status가 200이상 400미만이면 실행
  if (xhr.status >= 200 && xhr.status < 400) {
    if (xhr.readyState === 4) {
      console.log("통신 성공");
    }
  } else {
    console.log("통신 실패");
  }
});

//서버 요청
xhr.send();
