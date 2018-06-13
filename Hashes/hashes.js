//Ex1: Given a list of integers, i.e., {1, 1, 1, 1, 2, 2, 3, 3, 5}, count how many times a given integer occurs, e.g., {1, 4}, {2, 2}, {3, 2}, {5, 1}

var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
    } else {
        acc[curr] += 1;
    }

    return acc;
}, {});

//console.log("a: ", a);

var b = [1, 1, 1, 1, 2, 2, 3, 3, 5].reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
    } else {
        acc[curr] += 1;
    }

    return acc;
}, {});

//console.log("b: ", b);


//Ex2:Given a block of text find the 5 most common words.
//Solution from https://stackoverflow.com/questions/6565333/using-javascript-to-find-most-common-words-in-string
var str = "The rain in Spain. The the the rain is wet.";
var str2 = `Old Mac Donald had a farm 
E-I-E-I-O
And on that farm he had a cow
E-I-E-I-O
With a moo-moo here and a moo-moo there
Here a moo, there a moo, everywhere a moo-moo
Old Mac Donald had a farm 
E-I-E-I-O`
var wordCounts = {};
var words = str2.toLowerCase().split(/\b/);

for (var i = 0; i < words.length; i++)
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;


//console.log(wordCounts);


//Ex4: Given two strings, check if they’re anagrams or not. Two strings are anagrams if they are written using the same exact letters, ignoring space, punctuation and capitalization. Each letter should have the same count in both strings. For example, ‘eleven plus two’ and ‘twelve plus one’ are meaningful anagrams of each other.
//Solution from https://gist.github.com/GuillaumeBadi/9c853a99be112be0a155
var s1 = "eleven plus two";
var s2 = "twelve plus one";

var s3 = "IN PARISIAN THEN";
var s4 = "the rain in spain";

//Works for equal spaces between words, i.e. strings need to be same length.
let anagram = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false;
    } else {
        return s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join('');
    }

}


//console.log(anagram(s3, s4));


//Ex5: Find the first non-repeated character in a string.

var str = "aacbbdcee";

function find(str) {

    var start = str.split('');
    var length = start.length;
    var distinct = {};
    //var distinct = {c:2, d:3, a:2, b:1, e:3}; // Build a new JS object that we can iterate like hash


    for (var i = 0; i < length; i++) {
        if (distinct[start[i]] && distinct[start[i]] >= 1) {
            distinct[start[i]] = distinct[start[i]] + 1;
        }
        else {
            distinct[start[i]] = 1;
        }
    }

    for (var j in distinct) {
        if (distinct[j] == 1) {
            return j;
        }
    }

}

console.log(find(str));

//Ex6: Remove characters from a string

var str = "foo bar baz";

// returns: "foo r z"
var remove = str.replace(/ba/gi, '');

//console.log(remove);