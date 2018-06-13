// function larger(numOne, numTwo) {
    
//          if (numOne > numTwo) {
    
//               console.log("numOne is larger than numTwo.");
    
//          } else if (numOne < numTwo) {
    
//                console.log("numTwo is larger than numOne.");
    
//          } else {
    
//                 console.log("numTwo: " + numTwo + "." + " Both numbers are equal.");
    
//          }
    
//     }
    
    
//     larger(5, 5)





// function getDogAge (dogYears) {
    
//         return dogYears * 7
    
//     }
    
// console.log("My dog is " + getDogAge(5) + " in dog years.");



// function getDogAge (num) {
    
//         console.log( "My dog is " + (num * 7) + " in dog years.");
    
//     }
    
    
// getDogAge(7)



function calcCircumference (radius) {
    
         return Math.floor( Math.PI * (radius *2) )
    
    }
    
    
    function calcArea (radius) {
    
         return Math.floor( Math.PI * (Math.pow (radius, 2) ) )
    
    }
    
    
    function circleProps (radius) {
    
         var circumference = calcCircumference(radius)
    
         var area = calcArea(radius)
    
         console.log("The circumference is " + circumference + ".");
    
         console.log("The area is " + area + ".");
    
    }
    
    
    circleProps(8)