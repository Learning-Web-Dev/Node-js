const http = require("http");

const handleResponse = (req, res) => {
  res.write("Hello World!"); //write a response to the client
  res.end(); //end the response
};

const port = process.env.PORT || 4000; //server object listens on either env port or 4080

http
  .createServer(handleResponse)
  .listen(port, () => console.log("Port Connected at : ", port));
