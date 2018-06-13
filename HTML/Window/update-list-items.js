document.addEventListener('DOMContentLoaded', (event) => {
    
    //var userChoice = "";
    
    userChoice = window.prompt("Select an id: one, two, three, or four.");

    var newItem = document.getElementById(userChoice);
    

    var input = window.prompt("Enter a string.");

    if (newItem) {
        newItem.innerText = input;
    } else {
        one.innerText = "You didn't select the right ID.";
    }
    

});