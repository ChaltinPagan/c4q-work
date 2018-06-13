const fs = require("fs");

form = document.querySelector("form");
create = document.getElementById("create");
paytype = document.getElementById("paytype");
payname = document.getElementById("payname");
cost = document.getElementById("cost");

//payments.html
bodyPaywall = document.querySelector("body");
bodyPayments = document.getElementById("paymentsHTML");

create.addEventListener("click", (event) => {

    pText = payname.value + " " + cost.value;
    data = 
    `
    <div>
        <p>${pText}</p>
    </div>
    `;
    
    fs.appendFile("payments.html", data, (err) => {
        if (err) throw err;
        console.log("File appened.");
    })
})