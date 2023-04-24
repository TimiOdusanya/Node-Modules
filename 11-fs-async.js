//Asynchronous Non Blocking Programming

const { faLeftLong } = require("@fortawesome/free-solid-svg-icons");
const { readFile, writeFile } = require("fs");
console.log('start');

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);

    writeFile(
      "./content/result_async.txt",
      `Here is the appended result ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // const third = result
        console.log(result);
        console.log('done with this task');
      }
    );
  });
});

console.log('Starting with the next one');
