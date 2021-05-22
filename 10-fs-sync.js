const { readFileSync, writeFileSync } = require("fs");

console.log("Sync file start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

//console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Hello here is the result : First text file content -- ${first} and Second text file content -- ${second}`,
  { flag: "a" }
);

console.log("Done with this task");
console.log("Starting the next one");
