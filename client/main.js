const body = document.querySelector("body");

function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = { "Content-Type": "application/json" },
} = {}) {
  // const {url, method, body} = options;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 && xhr.status < 400) {
      if (readyState === 4) {
        // console.log("통신 성공");
        onSuccess(JSON.parse(response));
      }
    } else {
      // console.log("통신 실패");
      onFail("통신 실패");
    }
  });

  xhr.send(JSON.stringify(body));
}

//GET 메서드
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.get(
  "https://jsonplaceholder.typicode.com/users/",
  (res) => {
    body.insertAdjacentHTML("beforeend", JSON.stringify(res));
  },
  (err) => {
    body.insertAdjacentHTML("beforeend", "데이터 로딩 실패");
  }
);

// export function insertLast(node, text) {
//   if (typeof node === 'string') node = getNode(node);
//   if (node.nodeType !== document.ELEMENT_NODE) {
//     refError('insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.');
//   }
//   node.insertAdjacentHTML('beforeend', text);
// }
