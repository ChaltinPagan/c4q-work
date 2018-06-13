document.addEventListener("DOMContentLoaded", (event) => {

    body = document.querySelector("body");

    textarea = document.querySelector("textarea");

    textarea.value = window.localStorage.getItem("words");

    textarea.addEventListener("input", (event) => {

        event.preventDefault();

        window.localStorage.setItem("words", textarea.value);
    })
})