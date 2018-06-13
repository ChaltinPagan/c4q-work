//q1
// function double (num) {
    
//          return num * 2
    
//     }
    
    
//     function square (num) {
    
//          return num * num
    
//     }
    
    
//     function doubleSquare (num) {
    
//           return square(double(num))
    
//     }
    
    
//     console.log(doubleSquare (5) );


//q2
// Parameters are strings.

// function classyGreeting (firstName, lastName){
//              return  "Hi, my name is " + firstName + " " + lastName + "."
    
//              //return string
    
//     }
    
    
//     function yell (string) {
    
//            return string.toUpperCase()
    
//     }
    
    
//     function yellGreeting (firstName, lastName) {
    
//            return yell(classyGreeting(firstName, lastName) )
    
//     }
    
    
//     console.log(yellGreeting("captain", "underpants") );
//     console.log(yell(classyGreeting("captain", "underpants") ));


//q3
function removeDupes (array1, array2) {
    
           // return no duplicates
    
           var noDupe = [ ]
    
           for (var i = 0; i<array2.length; i++) {
    
                   if (array2[i].includes(array1[i]) ) {
    
                          noDupe += array1[i]
    
                   } else {
    
                           noDupe += array2[i]
    
                   }
    
          }
    
           return noDupe
    
    }
    
    
    function concatAndRemoveDupes (array1, array2) {
    
           // combine and remove dupes
    
           var combine = array1.concat(array2)
    
           return removeDupes(combine)
    
    }
    
    
    var array1 = [1, 2, 3]
    
    var array2 = [2, 3, 4]
    
    console.log(concatAndRemoveDupes(array1, array2) );


//q3 solution
let removeDupes = function(arr1){
    
      let newArray = []
    
      for(let i = 0; i < arr1.length; i++){ 
    
        if(!newArray.includes(arr1[i])){
    
        newArray.push(arr1[i]) 
    
        }
    
      
    
      }
    
      return newArray
    
    }
    
    console.log(removeDupes( [1,2,3,3,4,4,5] ))
    
    ​
    
    let concatAndRemoveDupes = function(array1,array2){
    
     let concat= array1.concat(array2)
    
    ​
    
      return removeDupes(concat)
    
    }
    
    console.log( concatAndRemoveDupes( [1,4,5,6,4],[2,4,6,3,5] ))




//q4
// function sort (grades) {
    
//            return grades.sort(function(a, b){return a-b})
    
//     }
    
    
//     function middleElement ( grades ) {
    
//            if (grades.length % 2 != 0) {
    
//                   return grades[Math.floor(grades.length / 2) ]
    
//            } else {
    
//                    average = (grades[ (grades.length / 2 ) - 1] + grades[grades.length / 2]) / 2
    
//                    return average
    
//             }
    
//     }
    
    
//     function median (grades ) {
    
//            return middleElement( sort(grades) )
    
//     }

//     var grades = [91, 85, 100, 92, 88]
    
//     console.log(median (grades) );

//     console.log( middleElement(grades) );

//     console.log(sort(grades));

    //console.log(grades[Math.floor(grades.length/2)])
   