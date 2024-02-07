
var firstNumber = function (number) {
    var readline = require("readline-sync");
    var num1 = readline.questionInt("enter the any num1---------------");
    var rem = 0;
    var temp = 0;
    var final = 0;
    temp = num1;
    while (num1 > 0) {
        rem = num1 % 10;
        num1 = parseInt(num1 / 10);
        final = final * 10 + rem
    };
    console.log("final-------------------->>", final);
    if (final == temp) {
        console.log(final, "final is a palindrome number")
    }
    else {
        console.log(final, "final is a palindrome number")
    };
    number();
};
let secoundNumber = function () {
    var readline = require("readline-sync");
    var num2 = readline.questionInt("enter the any num2------------------");
    var num3 = readline.questionInt("enter the any num3----------------");
    while (num2 <= num3) {
        var i = 1;
        while (i <= 10) {
            console.log(num2, "*", i, "=", i * num2);
            i = i + 1
        };
        console.log(" ");
        num2 = num2 + 1
    };
};
// firstNumber(secoundNumber);