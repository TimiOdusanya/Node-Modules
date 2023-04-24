const os = require("os");

//Info about current user
const user = os.userInfo();
console.log(user);

//Info about the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

//System uptime in minutes or hours
const uptime = os.uptime();
const timeInMin = uptime / 60;
console.log(`uptime in minutes: ${timeInMin}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
