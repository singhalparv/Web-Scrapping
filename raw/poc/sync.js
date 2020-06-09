let fs=require("fs");
console.log("Before");
let content=fs.readFileSync("f1.txt");
console.log("Content: "+content);
console.log("After");