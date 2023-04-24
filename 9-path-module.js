const path = require('path');

//Seperate Path
const seperate = path.sep;
console.log(seperate)

//Join Path
const filePath = path.join('/content', 'sub-content', 'file.txt');
console.log(filePath);

//Get Path Base Name
const baseName = path.basename(filePath);
console.log(baseName);

//Get Absolute Path
const absolute = path.resolve(__dirname, 'content', 'sub-content', 'file.txt');
console.log(absolute);

//const get dir root with other path
const otherPath = path.resolve(__dirname, '/content', 'sub-content', 'file.txt')
console.log(otherPath);