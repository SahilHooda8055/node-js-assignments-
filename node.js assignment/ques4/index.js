/*
In this coding challenge, you will continue working with the file created in the previous assignments, Here your task is to access the existing nodejs_architecture.txt file and use the fs module to append additional data to it& Specifically, add some advantages of Nodejs to the file and print the file content to the console.
*/
const fs = require("fs");

const nodeJs_Advantages =
  " ---1.Advantages:- High-performance for Real-time Applications 2.Easy Scalability for Modern Applications 3.Cost-effective with Fullstack JS 4.Community Support to Simplify Development 5.Easy to Learn and Quick to Adapt 6.Helps in building Cross-functional Teams 7.Improves App Response Time and Boosts Performance 8.Reduces Time-to-Market of your applications 9.Extensibility to Meet Customized Requirements 10.Reduces Loading Time by Quick Caching 11.Helps in Building Cross-Platform Applications";

fs.appendFileSync("nodejs_architecture.txt", nodeJs_Advantages);

const afterAppendData = fs.readFileSync("nodejs_architecture.txt");

console.log(
  "After Append Data of nodejs_architecture.txt ",
  afterAppendData.toString()
);
