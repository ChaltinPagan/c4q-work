document.addEventListener('DOMContentLoaded', (event) => {
    var parag = document.querySelectorAll("p");
    

    for (var i = 0; i <parag.length; i++) {
        if ( i % 2 === 0) {
            parag[i].classList.add("bgGreen");
        } else {
            parag[i].classList.add("bgYellow");
        }
    };
});