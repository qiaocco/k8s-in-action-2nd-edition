const http = require("http");
const os = require("os");
const readline = require("readline");

const listenPort = 8080;

var greeting = "你好";

console.log("node服务启动中...");
console.log("Local hostname is " + os.hostname());
console.log("服务运行端口是： " + listenPort);

let handler = function (request, response) {
  let clientIP = request.connection.remoteAddress;
  console.log("收到请求啦, 请求url=" + request.url + ", clientIP=" + clientIP);
  response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  response.write(greeting + ", 我的hostname是" + os.hostname() + '. ');
  response.write("你的ip是" + clientIP + '. ');
  response.end("\n");
}

let server = http.createServer(handler)
server.listen(listenPort)

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on("line", function (line) {
  if (line.trim() === "") {
    console.log("请输入新的欢迎语，并按回车键")
  } else {
    greeting = line;
    console.log("欢迎语是：" + line)
  }
})