const crypto = require("crypto");

function rolldice(){
    const random = crypto.randomInt(1,7) // 1 to 6
    console.log("Dice rolled" , random);
}

for (i=1; i=5; i++){
    rolldice()
}