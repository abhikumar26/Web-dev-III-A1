console.log("The process is :" ,process.pid);
console.log("The version of is :", process.version.node);
console.log("command line arguments" , process.argv);
const [, , firstName, Lastname] = process.argv;
console.log(`Your name is ${firstName} ${Lastname}`);


