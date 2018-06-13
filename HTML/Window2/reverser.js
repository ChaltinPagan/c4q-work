document.addEventListener("DOMContentLoaded", (event) => {

    document.addEventListener("submit", (event) => {
        var p = document.querySelector("p");
        p.innerText = user.value.split("").reverse().join("");
        event.preventDefault();
    })
});