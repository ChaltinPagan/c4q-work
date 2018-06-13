document.addEventListener("DOMContentLoaded", function() {

    button = document.getElementById("submit");

    ul = document.querySelector("UL");
    
    words = document.getElementById("words");

    //body = getElementsByTagName("BODY");

    
    document.addEventListener("submit", (event) => { 

        event.preventDefault();
        item = document.createElement("LI"); 

        //item.appendChild(document.createTextNode("text"));
        //item.innerText = "hello"

        item.innerText = words.value;

            ul.appendChild(item);
            console.log("hello")
            
            
            //text.innerText = "";
            // 
            
        
    })
})