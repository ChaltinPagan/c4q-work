document.addEventListener('DOMContentLoaded', (event) => {
    
    //var userChoice = "";
    
    userChoice = window.prompt("Select an id: one, two, three, or four.");

    var newItem = document.getElementById(userChoice);

    var text1 = newItem.innerText;
    
    //var userChoice2 = "";

    userChoice2 = window.prompt("Select a different id: one, two, three, or four.");

    var newItem2 = document.getElementById(userChoice2);

    //var text2 = userChoice2.innerText;


    newItem.innerText = newItem2.innerText;
    
    newItem2.innerText= text1;

});