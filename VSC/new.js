// function numLargest(num1, num2){
//     if (num1 > num2){
//         return num1
//     } 
//     else if (num2 > num1) {
//         return num2
//     }
//     else if (num1 === num2){
//         return num2
//     }

// }

// console.log(numLargest(3, 5) );

// console.log(numLargest(5, 3) );

//console.log(numLargest(10, 10) );


//Exercise 3

// //Create two functions that calculate properties of a circle, using the definitions here (Links to an external site.)Links to an external site..

//    // Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
//     Create a function called calcArea that takes the radius as an argument and returns the area.

// Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

// "The circumference is ___".

//  "The area is ___".

function calCircumference (radius){
    let circumference =  Math.PI * 2 *radius
    return circumference
    
}

//console.log(calCircumference(radius) );

function calArea (radius){
    let area = Math.PI * radius *radius
    return area
    
}

//console.log(calArea(radius));

function circleProps (radius){
    console.log("The circumference is " + calCircumference)
    console.log("The area is " + calArea)
    return circleProps
}

//var radius = 6
circleProps(6)


// Exercise 5:

// The Calculator:

//     Write a function square that returns the square of a number.
//     Write a function half that returns half the value of a number.
//     Write a function percentOf that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
//     Write a function called areaOfCircle that takes one argument (the radius), and return the area of a circle with that radius.
//         Bonus: Round the result so there are only two digits after the decimal.
//     Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
//         Calculates and saves the square of the number.
//         Calculates and saves half the value of the result of #1.
//         Calculate the area of a circle with the result of #2 as the radius.
//         Calculate and returns the percenctage the squared result (#1) is of the area (#3)

function square (num) {
    return num *num
}

function half (num){
    return num / 2
}

function percentOf (num, num2){
    return (num/num2) * 100
    console.log((x,y) + "%.")
}

function areaOfCircle (radius) {
    return Math.PI (radius*radius)
}

function doStuff (num){
    console.log("square = " + square() )
    console.log("half = " + half(square() ) )
    console.log("area = " + areaOfCircle((half() )) )
    console.log("percentage = " + percentOf(square(), areaofCircle( )))
}