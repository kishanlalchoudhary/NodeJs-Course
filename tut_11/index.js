// Make a simple API

// Topics -
// Make a server
// create header and API body
// Create an API with static data
// Put data in another file

const data = require("./data");
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8000);
