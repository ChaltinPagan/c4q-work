//Ex1: Given an array of integers, i.e., [1, 1, 1, 1, 2, 2, 3, 3, 5], count how many times a given integer occurs, e.g., {1:4}, {2:2}, {3:2}, {5:1}

var arr = [1, 1, 1, 1, 2, 2, 3, 3, 5];

function count(arr) {
    let hash = {};
    for (var i = 0; i < arr.length; i++){
        //If key doesn't exist, add key equal to 1.
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
        //If key does exist, increment by one.
        } else {
            hash[arr[i]] += 1;
        }
    }
    return hash;
}

//console.log(count(arr));

function countTwo(arr){
    let hash = {};
    arr.forEach(el => {
        if (!hash[el]){
            hash[el] = 1;
        } else {
            hash[el] += 1;
        }
    });
    return hash;
}

//console.log(countTwo(arr));

//Ex2: Given a block of text find the 5 most common words.

let words = "Bacon ipsum dolor amet andouille sausage rump salami filet mignon pig. Chuck biltong turkey ham, cow meatball turducken. Shoulder leberkas pastrami, fatback bresaola jowl spare ribs. Turducken alcatra porchetta bresaola. Tri-tip kielbasa bacon jowl tongue picanha leberkas buffalo. Jowl bacon turkey spare ribs fatback strip steak, jerky meatloaf ribeye.";

function wordCount(str){
    //Split string into array.
    let wordsArr = words.split(" ");
    let hash = [];
    //Count words in array and send to a hash table. See countTwo() function above.
    let obj = countTwo(wordsArr);
    //Send object to array.
    for (key in obj) {
        hash.push([key, obj[key]]);
    } 
    //Sort array.
    let sorted = hash.sort((a, b) => {
        return a[1] - b[1];
    })
    //Return 5 most common words.
    return sorted.slice(-5);
}

//console.log(wordCount(words))

//Ex3: Write the song Old Mac Donald using an array of objects. The order in which each animal is introduced doesn't matter.

function oldMac(animals) {
    return animals.map(el => {
        return `
    Old MacDonald had a farm.
    E I E I O 
    And on that farm he had a ${el.animal}.
    E I E I O 
    With a ${el.sound} ${el.sound} here
    and a ${el.sound} ${el.sound} there.
    Here a ${el.sound}
    there a ${el.sound}
    everywhere a ${el.sound} ${el.sound}.
    Old MacDonald had a farm.
    E I E I O.
    `;
    }).join('\n');
}

let animals = [
    { animal: 'duck', sound: 'quack' },
    { animal: 'dog', sound: 'woof' },
    { animal: 'fish', sound: 'blub' },
];

//console.log(oldMac(animals));

//Ex4: Given two strings, check if they’re anagrams or not. Two strings are anagrams if they are written using the same exact letters, ignoring space, punctuation and capitalization. Each letter should have the same count in both strings. For example, ‘eleven plus two’ and ‘twelve plus one’ are meaningful anagrams of each other.

let str1 = "the rain in spain";
let str2 = "Innate Hairpins.";


function anagram(str1, str2){
    //Send strings to lowercase and sort.
    let s1 = str1.toLowerCase().split("").sort();
    let s2 = str2.toLowerCase().split("").sort();
    let arr1 = [];
    let arr2 = [];

    //Only push letters into arrays, not space or punctuation.
    for (var i = 0; i < s1.length; i++){
        if (s1[i].match(/[a-z]/)) {
            arr1.push(s1[i]);
        }
    }
    for (var j = 0; j < s2.length; j++){
        if (s2[j].match(/[a-z]/)) {
            arr2.push(s2[j]);
        }
    }
    //Join arrays into strings. Check if they match.
    return arr1.join('') == arr2.join('');
}

//console.log(anagram(str1, str2));


//Ex5: Find the first non-repeated character in a string.

function noRepeat(str){
    //Send string to lowercase.
    let strArr = str.toLowerCase().split('');
    let noSpace = [];

    //Only push letters into array, no spaces or punctuation.
    for (var i = 0; i < strArr.length; i++){
        if (strArr[i].match(/[a-z]/)) {
            noSpace.push(strArr[i]);
        }
    }

    //Send array into hash table. See count() function above.
    let find = count(noSpace);

    //Search object for first letter with a count of 1.
    for (key in find) {
        if(find[key] === 1) {
            return key;
        }
    }
}

console.log(noRepeat("aaabbbcccde"));

//Ex6: Remove specified characters in a string.