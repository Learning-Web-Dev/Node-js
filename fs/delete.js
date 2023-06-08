var fs = require("fs");

/* 
To delete a file with the File System module,  use the fs.unlink() method.
*/

/* 
fs.unlink() - method deletes the specified file
*/

fs.unlink("test.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});
