const firstLetter = str => str.charAt(0);

const capitalize = str => str.toUpperCase();

const reverse = str => str.split("").reverse().join("");

module.exports.firstLetter = firstLetter;
module.exports.capitalize = capitalize;
module.exports.reverse = reverse;