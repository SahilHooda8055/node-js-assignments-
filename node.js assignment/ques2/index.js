/*
In the same project directory created in the above assignment, your task is to create a new file index&js and
using the fs module add information about Node&js architecture to a new file nodejs_architecture&txt& Below
are the expected files in the project folder.
*/
const fs = require("fs");

const infoAboutNodeJsArch =
  "Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Node.js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.";

fs.writeFileSync("nodejs_architecture.txt", infoAboutNodeJsArch);
