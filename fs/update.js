var fs = require("fs");

/* 

The File System module has methods for updating files:

    *fs.appendFile()
    *fs.writeFile()
    *fs.rename() - to rename the file

*/

/* 
fs.appendFile() - method appends the specified content at the end of the specified file
*/

fs.appendFile("test.txt", " This is from update method.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

/* 
fs.rename() - method renames the specified file
*/

fs.rename("test.txt", "test-updated.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
