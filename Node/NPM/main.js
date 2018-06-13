const chalk = require("chalk");

let helloBlue = () => console.log(chalk.blue("Hello World!") );

let helloRed = () => console.log(chalk.red("Hello World!") );

let stringToColor = (str, color) => console.log(chalk.keyword(color)(str));

function evensBlueOddsYellow(str) {
    arr = str.split(" ");
    //newStr = "";
    newArr = [];
    //newStr = newArr.join(" ");

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            el = (chalk.blue(arr[i]))
            newArr.push(el);
        } else {
            el = (chalk.yellow(arr[i]))
            newArr.push(el);
        }
    }
    console.log(newArr.join(" "));
}

let angryText = (str) => console.log(chalk.red.bold.underline(str));

let backgroundCyan = (str) => console.log(chalk.white.bgCyan(str));

function boldFirstUnderlineLast (str) {
    arr = str.split(" ");
    first = (chalk.bold(arr[0]))
    slice = arr.slice(1, arr.length-1).join(" ");
    last = (chalk.underline(arr[arr.length-1]));

    if (arr.length <= 2) {
        console.log(`${first} ${last}`);
        console.log(arr.length);
    } else {
        console.log(`${first} ${slice} ${last}`);
        console.log(arr.length);
    }
    
} 

// string = process.argv[2];
// color = process.argv[3];
// more = process.argv[4]

// function commandLineChalk(string, color) {

//     console.log(string);
//     console.log(chalk.keyword(color)[more](string));
// };

// function commandLineChalk(input) {
//     input = process.argv;
//     string = `(${process.argv[2]})`;
//     log = "";
//     for (var i = 3; i < input.length; i++) {
//         log += `.${input[i]}`;
//     }
//     write = chalk + log + string;
//     console.log(write);
// }

// helloBlue();
// helloRed();
// stringToColor("hello", "green");
// evensBlueOddsYellow("this is a test");
// angryText("angry");
// backgroundCyan("cyan");
 boldFirstUnderlineLast("one");
//commandLineChalk(process.argv);