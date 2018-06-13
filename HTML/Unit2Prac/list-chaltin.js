body = document.querySelector("body");

ol = document.querySelector("ol");

button = document.querySelector("button");



window.addEventListener("click", (event) => {

    if (event.target.tagName === "BUTTON") {
        return;
    }
    
    x = event.clientX;
    y = event.clientY;

    li = document.createElement("li");

    li.innerText = x + ", " + y;
    
    ol.appendChild(li);

    
    
    
    
});


button.addEventListener("click", (event) => {
    

       while (ol.hasChildNodes()) {

            ol.removeChild(ol.firstChild);
            
        }
    
});