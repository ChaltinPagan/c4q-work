

//MULTIPLY ARRAY
function multArrIt(arr){
    let acc = 1;
    for(let i=0; i<arr.length; i++){
        acc *= arr[i];
    }
    return acc;
}

//console.log(multArrIt([2,3,4]));

function multRecur(arr){
    if(arr.length===1){
        return arr[0];
    }
    return arr[0] * multRecur(arr.slice(1));
}

//console.log(multRecur([2,3,4]));

//ADD ARRAY
function sumArr(arr){
    if(arr.length===1){
        return arr[0];
    }
    return arr[0] +sumArr(arr.slice(1));
}

//CONCAT
//Write a function called concatArr that takes in an array of strings as an argument and recursively concatenates the strings together into a single string, with spaces between each original string.

function concatArr(arr){
    if(arr.length === 1) {
        return arr[0];
    }
    return arr[0] + " " + concatArr(arr.slice(1));
}

//console.log(concatArr(['is', 'it', 'tomorrow']));

//SUM EVENS
//Write a function called sumEvens that takes in an array of numbers as an argument and recursively sums only the even numbers in the array.

function sumEvens(arr){
    if(arr.length === 1){
        return arr[0];
    } 
    let evens = arr.filter(el => {
        return el % 2 === 0;
    })
    return evens[0] + sumEvens(evens.slice(1));
}

//Cody solution
function sumEvensTwo(arr){
    if(arr.length===1){
        if(arr[0] % 2===0){
            return arr[0];
        }else {
            return 0;
        }
    }else {
        if(arr[0]%2===0){
            return arr[0] + sumEvens(arr.slice(1));
        }else{
            return sumEvens(arr.slice(1));
        }
    }
}

//console.log(sumEvens([10, 5, 1, 2, 12]));

//RECURSIVE RANGE
//Write a function called range which takes in two numbers (num1, num2) as arguments. The function should return an array of numbers between num1 and num2.

function range(num1, num2){
    let min = num1 < num2 ? num1 : num2;
    let max = num1 > num2 ? num1 : num2; 
    let arr = [];
    if (arr[arr.length-1] === max) {
        return arr[arr.length];
    }
    for (var i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

//console.log(range(5, 15));

//Cody solution

function rangeTwo(start, end, result){
    result.push(start);
    if(start === end){
        return result;
    }
    return rangeTwo(start+1, end, result);
}

//console.log(rangeTwo(2,6,[]));

//in progress
function rangeRecur(num1, num2){
    
    let arr = [];
    if (arr[arr.length-1] === num2) {
        return arr[0];
    } else {
        arr.push(num1);
        rangeRecur(num1 + 1, num2);
    }
    return arr;
}

//console.log(rangeRecur(5, 10));


//FACTORIAL
function factorial(x){
    //Needed or there will be an infinite loop.
    if (x === 1){
        return 1;
    } 
    return x * factorial(x-1);
}

//console.log(factorial(5));