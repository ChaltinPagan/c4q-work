// // Write a function stringReverse with parameter x that takes a string as an argument and returns the reverse of that string.

// // Write a function titleString with parameter x that takes a string and returns a version of that string with the first letter of every word capitalized.

// // Write a function titleTheReverse with parameter x that takes a string and returns the reverse of that string with the first letter of every word capitalized.

// // console.log( titleTheReverse('the duck wants your soul') );
// // // "Lous Ruoy Stnaw Kcud Eht"
// // console.log( titleTheReverse('i love cookies') );
// // // "Seikooc Evol I"

// var str = "hello"

// function stringReverse (x) {
//     var newStr = ""
//     for (var i = x.length-1; i >= 0; i--) {
//         newStr += x[i]
//     }
//     return newStr
// }

// var str2 = "i like cake"
// var str3 = "I LOVE CAKE"

// function titleString (x) {
//     x = x.toLowerCase()
//     x = x.split(" ")
//     for (var i = 0; i < x.length; i++){
//         x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1)
//     }
//     return x.join(" ")
// }

// function titleTheReverse (x) {
//     return titleString( stringReverse(x) )
// }

// console.log( stringReverse(str) ) // olleh
// console.log( titleString(str2) ) // I Like Cake
// console.log( titleString(str3) ) // I Love Cake
// console.log(titleTheReverse (str3) ) //Ekac Evol I

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello"));


function stringReverse (x) {
  return x.split("").reverse().join("")
}

