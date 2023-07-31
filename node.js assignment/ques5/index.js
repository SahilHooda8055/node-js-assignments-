/*
To wind up the fs module walk"through challenges, let’s delete the nodejs_architecture.txt file& On deletion print "File Deleted SuccessFully" to the console.
*/
const fs = require("fs");

fs.unlinkSync("./nodejs_architecture.txt", () => {
  console.log("File Deleted SuccessFully!");
});
