// Creating a Simple and Basic API

const data = require("./data");
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8000);
