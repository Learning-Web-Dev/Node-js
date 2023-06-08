const http = require("http");
const fs = require("fs");

/* 
Common use for the File System module:
    *Read files
    *Create files
    *Update files
    *Delete files
    *Rename files
*/

//Read Method - fs.readFile()
http
  .createServer((req, res) => {
    fs.readFile("demo.html", (err, data) => {
      try {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      } catch (error) {
        console.log("Error : ", error);
      }
    });
  })
  .listen(8080);
