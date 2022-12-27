console.log(global);

// node에서 live-server 패키지 가져와서 변수에 담았음
const liveServer = require("live-server");

//liverserver실행시킬 때 옵션 설정할 수 있음
const params = {
  host: "localhost",
  port: 3000,
  open: false,
  root: "./client",
};

liveServer.start(params);
