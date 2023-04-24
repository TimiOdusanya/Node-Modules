// imported from fs.readFileSync
const { readFileSync, writeFileSync } = require("fs");
console.log('start');

writeFileSync("./content/first.txt", `This is the first text file`);
writeFileSync("./content/second.txt", `This is the second text file`);

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//To Append A file
writeFileSync(
  "./content/append_file.txt",
  `This is the appended file: ${first}, ${second}`,
  { flag: "a" }
);

console.log('done with this next task');
console.log('starting with the next one');

console.log(readFileSync("./content/append_file.txt", "utf8"));

//Read File in Another Format (JS)
// console.log(readFileSync('./5-util.js', 'utf8'));
