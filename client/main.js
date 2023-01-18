/* 
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
*/

//유틸함수 만들기

function xhrData(method, url, body) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener("readystatechange", () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      if (xhr.readyState === 4) {
        console.log("통신 성공");
        console.log(JSON.parse(xhr.response));
      }
    } else {
      console.log("통신 실패");
    }
  });

  xhr.send(JSON.stringify(body));
}

//GET 요청
xhrData("GET", "https://jsonplaceholder.typicode.com/users");

//POST 요청
xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "진우",
  username: "지누옹",
  email: "rlawlsdn263@naver.com",
});

/* 
//구조분해할당자
function xhrData(method, url, body) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 && xhr.status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        console.log(JSON.parse(response));
      }
    } else {
      console.log("통신 실패");
    }
  });

  xhr.send(JSON.stringify(body));
}

xhrData("GET", "https://jsonplaceholder.typicode.com/users");
 */
