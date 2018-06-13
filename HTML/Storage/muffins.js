document.addEventListener("DOMContentLoaded", (event) => {
    
    eat = document.getElementById("eat");
    bake = document.getElementById("bake");
    muffin = document.getElementById("muffin");

    count = 10;
    muffin.innerText = "Muffin Count: " + count;
    
    eat.addEventListener("click", (event) => {

        // up = Number(count.innerText);
        // up++;
        // up.toString();
        // count.innerText = "hello";

        count -= 1;
        muffin.innerText = "Muffin Count: " + count;
        
    });

    bake.addEventListener("click", (event) => {

        count += 5;
        muffin.innerText = "Muffin Count: " + count;
    });
});