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
        console.log(JSON.parse(response));
      }
    } else {
      // console.log("통신 실패");
      onFail("통신 실패");
    }
  });

  xhr.send(JSON.stringify(body));
}

//get 메서드
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

/* xhrData.get(
  "https://jsonplaceholder.typicode.com/users/1",
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
); */

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post(
  "https://jsonplaceholder.typicode.com/users/",
  {
    name: "김진우",
    age: "27",
    gender: "male",
  },
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
