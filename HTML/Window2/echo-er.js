document.addEventListener("DOMContentLoaded", (event) => {

    document.addEventListener("keypress", (event) => {
        var input = event.key;

        var h1 = document.querySelector("h1");

        if (input.match(/[A-Z]/) ) {
            
            h1.style.textDecoration = 'underline';
            
            h1.innerText += input;
            

        } else {
            h1.style.textDecoration = 'none';
            h1.innerText += input;
        }
        
    })
})