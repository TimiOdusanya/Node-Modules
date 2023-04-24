// GLobal
//__dirname -
// __filename -

// console.log(__dirname);

// setInterval( () =>{
//     console.log("Hello World!!")
// }, 1000

// )

//CommonJS, every node file is a module by default
//module - Encapsulated Code

const names = require("./4-names");
const sayHi = require("./5-util");

const data = require("./6-alternative-flavour");
require("./7-mind-grenade");

console.log(data);
sayHi(names.John);
sayHi(names.Peter);
sayHi("Susan");
