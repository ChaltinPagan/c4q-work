// //question2
// function prettyLog(recipe) {
//     for (var k in ingredients){
//         console.log(k + ">" + ingredients)
//     }
    
//     return recipe
// }

// var recipe = {
//     title: "Soup",
//     servings: 3,
//     ingredients: ["cinnamon", "cumin", "cocoa"]
// }

// console.log(prettyLog(recipe))


//question4
// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
//   }

//   function getObjLength(cat){
  
//     return Object.keys(cat).length
//   }

//   console.log(getObjLength(cat))


//question 6
var todo = {
    description: "work",
    completed: true
}

var todos = [
    {
        todo
    }
]

function done (pam1, pam2){
    todos.push({
        description: pam1,
        completed: pam2
    });
}

function allTodo (todos){
    return todos
}

function complete (todos){
    for (var i = 0; i < todo.length; i++){
        if (i % 2 === 0) {
            return ""
        }
    }
}

console.log(allTodo(todos))