firstNumber(secoundNumber);
thirdNumber(fourthNumber);
function firstNumber(number) {
    var readline = require("readline-sync");
    var num1 = readline.questionInt("enter the any num1------------------");
    var i = 2;
    var count = 0;
    while (i <= num1) {
        if (num1 % i == 0) {
            count=count+1
        }
        i=i+1
    };
    console.log("count--------------------->>", count);
    if (count == 1) {
        console.log(count,"count is a prime number")
    }
    else {
        console.log(count,"count is a not prime number")
    };
    number();
};
function secoundNumber() {
    var readline = require("readline-sync");
    var num2 = readline.questionInt("enter the any num2-------------");
    var i = 1;
    var sum = 0;
    while (i < num2) {
        if (num2 % i == 0) {
            sum=sum+i
        }
        i=i+1
    };
    console.log("sum--------------->>", sum);
    if (sum == num2) {
        console.log(sum,"sum is a perfect number")
    }
    else {
        console.log(sum,"sum is a not perfect number")
    };
};
function thirdNumber(numbers) {
    var readline = require("readline-sync");
    var num3 = readline.questionInt("enter the any num3--------------");
    var fact = 1;
    while (num3 > 0) {
        fact = fact * num3
        num3=num3-1
    };
    console.log("fact----------->>", fact);
    numbers();
};
function fourthNumber() {
    var readline = require("readline-sync");
    var num4 = readline.questionInt("enter the any num4-----------");
    var i = 0;
    var x = 0;
    var y = 1;
    while (i <= num4) {
        var temp = x + y;
        console.log(temp);
        x = y;
        y = temp;
        i=i+1
    }
}
function fiveNumber(num) {
    var readline = require("readline-sync");
    var num5 = readline.questionInt("enter the any num5-------------");
    var rem = 0;
    var temp = 0;
    var final = 0;
    temp = num5;
    while (num5 > 0) {
        rem = num5 % 10;
        num5 = parseInt(num5 / 10);
        final=final*10+rem
    };
    console.log("final------------------->>", final);
    if (final == temp) {
        console.log(final,"final is a palindrome number")
    }
    else {
        console.log(final,"final is a not palindrome number")
    };
    num();
};
function sixNumber() {
    var readline = require("readline-sync");
    var num6 = readline.questionInt("enter the any num6-------------");
    var num7 = readline.questionInt("enter the any num7------------");
    while (num6 <= num7) {
        var i = 1;
        while (i <= 10) {
            console.log(num6, "*", i, "=", i * num6);
            i=i+1
        };
        console.log(" ");
        num6=num6+1
    };
};
// firstNumber(secoundNumber);
// thirdNumber(fourthNumber)
// fiveNumber(sixNumber);