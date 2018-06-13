// CALLBACK

// Write a function verbNoun with parameters cb and noun which takes a callback function and string and executes the callback function with the string as an argument, returning the result.

// Write a function splitJoinSpace with parameter x that which takes a string and returns a version of the string with a blank space between every character.

// Invoke verbNoun with splitJoinSpace and 'chair' as arguments.

// Invoke verbNoun with splitJoinSpace and 'curtain' as arguments.

// console.log( verbNoun( splitJoinSpace, 'chair' ) );
// // "c h a i r"
// console.log( verbNoun( splitJoinSpace, 'curtain' ) );
// // "c u r t a i n"

function verbNoun (cb, noun) {
    return cb(noun)
}

function splitJoinSpace (x) {
    x = x.split("")
    x = x.join(" ")
    return x
}

//console.log(splitJoinSpace("chair"))
console.log(verbNoun(splitJoinSpace, "chair")) // c h a i r
console.log(verbNoun(splitJoinSpace, "curtain")) // c u r t a i n