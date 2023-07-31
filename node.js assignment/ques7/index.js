/*
In this challenge, you are required to use Nodejs and the built-in HTTP module to create a server that
displays the text "I Am Happy To Learn Full Stack Web Development From PW Skills!" on the browser screen1
The goal is to utilize the HTTP module to create an HTTP server, set the port, appropriate content type, and send the message as a response to the client's request, allowing it to display on the browser.
*/
const http = require("http");

const PORT = 3001;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    try {
      res.statusCode = 200;
      res.setHeader("Content-Type", " text/html");
      res.end(
        "<h1>I (sahil) Am Happy To Learn Full Stack Web Development From PW Skills!</h1>"
      );
    } catch (error) {
      console.error("Error : ", error);
    }
  }
});

server.listen(PORT, () => {
  console.log(`server Running at ${HOSTNAME}:${PORT}`);
});
