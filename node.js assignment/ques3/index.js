/*
Continuing assignment 2 Here, let’s create a new file named index.js and use the fs module to read the
content of nodejs_architecture.txt and print the content to the console.
*/
const fs = require("fs");

const nodejsInfoArchInfo = fs.readFileSync("nodejs_architecture.txt");

console.log(nodejsInfoArchInfo.toString());
