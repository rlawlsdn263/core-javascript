function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = { "Content-Type": "application/json" },
}) {
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

xhrData({
  url: "https://jsonplaceholder.typicode.com/users/1",
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.error(err);
  },
});
