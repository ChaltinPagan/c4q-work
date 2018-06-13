// const icons = require("titanic-icons");

// let titanic = new Titanic ({
//     hover: true,
//     click: true
// });


// var titanic = new Titanic('https://rawgit.com/icons8/titanic/master/src/icons/'); // initialization
// API
// titanic.isInitialized()
// -- just true/false flag
// titanic.items
// -- list of titanic items
// titanic.items[index].on(), titanic.items[index].off(), titanic.items[index].play()
// -- play animations of the titanic item by index
// titanic.on(token), titanic.off(token), titanic.play(token)
// -- play animations of the titanic item by token (name)

var titanic = new Titanic({
    hover: true, // auto animated on hover (default true)
    click: true  // auto animated on click/tap (default false)
   });