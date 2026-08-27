const isEven = require("./module/isEven");
const log = require("./module/logger");

const num = 7;
log(`Checking if ${num} is even: ${isEven(num)}`);
