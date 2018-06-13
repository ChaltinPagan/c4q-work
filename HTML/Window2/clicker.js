document.addEventListener("DOMContentLoaded", (event) => {

    document.addEventListener("click", (event) => {
        var w = window.innerWidth;
        var body = document.querySelector("body");

        if (event.x < (w/2)) {
             body.style.backgroundColor = "mediumaquamarine";
        } else {
             body.style.backgroundColor = "peachpuff";
        }
    });
});