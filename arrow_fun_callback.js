var firstNumber = (number) => {
    var readline = require("readline-sync");
    var num1 = readline.questionInt("enter the any num1------------");
    var num2 = readline.questionInt("enter the any num2---------------");
    var i = 1;
    var lcm = 0;
    while (i > 0) {
        if (i % num1 == 0 && i % num2 == 0) {
            lcm = i;
            break
        }
        i = i + 1
    };
    console.log(lcm);
    number();
};
let secoundNumber = () => {
    var readline = require("readline-sync");
    var num3 = readline.questionInt("enter the any num3--------------");
    var num4 = readline.questionInt("enter the any num5-----------");
    var i = 1;
    var hcf = 0;
    while (i <= num3 && i <= num4) {
        if (num3 % i == 0 && num4 % i == 0) {
            hcf = i
        }
        i = i + 1
    };
    console.log(hcf)
};
var thirdNumber = (num3) => {
    var i = 1;
    do {
        if (i % 3 == 0 && i % 7 == 0) {
            console.log(i, "Navgurukul")
        }
        else if (i % 7 == 0) {
            console.log(i, "gurukul")
        }
        else if (i % 3 == 0) {
            console.log(i, "nav")
        }
        else {
            console.log(i)
        }
        i = i + 1
    }
    while (i <= num3)
};
var fourthNumber = (Number) => {
    var readline = require("readline-sync");
    var num4 = readline.questionInt("enter the any num4-----------");
    var i = 1;
    var sum = 0;
    while (i <= num4) {
        var num5 = readline.questionInt("enter the any num5------------");
        sum = sum + num5;
        i = i + 1
    };
    console.log("total of sum----------->>", sum)
    Number();
};
firstNumber(secoundNumber);
fourthNumber(thirdNumber(100))