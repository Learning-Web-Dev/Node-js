const fs = require("fs");

/* 
The File System module has methods for creating new files:
    *fs.appendFile()
    *fs.open()
    *fs.writeFile()
*/

/*  
fs.appendFile() - method appends specified content to a file.If the file does not exist, the file will be created.
*/
fs.appendFile("test.txt", "I'm from Append Method", (err) => {
  if (err) return console.log("Error : ", err);
  console.log("Data Saved");
});

/* 
fs.open() - method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created
*/
fs.open("test.txt", "w", (err, file) => {
  if (err) return console.log("Error : ", err);
  console.log("Saved!");
});

/* 
fs.writeFile() - method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
*/
fs.writeFile("test.txt", "I'm from Write Method", (err) => {
  if (err) return console.log("Error : ", err);
  console.log("Data Saved");
});
