// for (var i = 1; i <= 5; i++) {
    
//          console.log(i);
    
//     }


var num = 5

var str = " "

var arr = str.split("")

for (var i = 1; i <= num; i++) {
    
        //  console.log(i);
    
         for (var j = i; j <= i; j++) {
    
               //console.log(i, j);
    
              for (var k = i; k <= i; k++) {
    
                   str += i, j, k
              }
    
         }
    
    }

    console.log(arr)




// function factorial(x) {
    
//          if (x===0 || x === 1) {
    
//                return 1
    
//          }
    
//          return x * factorial(x-1)
    
//     }

// console.log(factorial(5))

// var x = x++

// console.log(x)

//answer
for (var i = 1; i <= 5; i++){
    for (var j = 1; j <= 3; j++){
        console.log(i)
    }
}


//answer
//recursive
function factorial(x) {
    if (x ===1){
        return 1
    }

    return x * factorial(x-1);
}

console.log( factorial(4) );

//non-recursive solution
function factorialNonRecursion(x){
    var total = 1; 
    for (var i = 1; i <= x; i++){
        total *= i;
    }
    return total
}