document.addEventListener("DOMContentLoaded", (event) => {

    body = document.querySelector("body");
    button = document.querySelector("button");
    p1 = document.getElementById("setup");
    p2 = document.getElementById("punchline");

    body.addEventListener("click", (event) => {

        req = new XMLHttpRequest();
        
        req.addEventListener("load", (event) => {

            respTxt = event.currentTarget.responseText;
            respArr = JSON.parse(respTxt);

            setup = respArr.setup;
            punchline = respArr.punchline;

            console.log("This is the respText: " + respTxt)
            console.log("This is the respArr: " + respArr)
            
            p1.innerText = setup;
            p2.innerText = punchline;

            
        });
    
        req.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
        req.send();
    })
})
