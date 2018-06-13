//paywall.html
form = document.querySelector("form");
create = document.getElementById("create");
paytype = document.getElementById("paytype");
payname = document.getElementById("payname");
cost = document.getElementById("cost");

//payments.html
bodyPaywall = document.querySelector("body");
bodyPayments = document.getElementById("paymentsHTML");

create.addEventListener("click", (event) => {
    
    div = document.createElement("div");
    p = document.createElement("p");
    
    div.nodeName = payname.value;
   
    bodyPaywall.appendChild(div);
    p.innerText = payname.value + " " + cost.value;
    div.appendChild(p);

    console.log(payname.value + " " + cost.value);
    event.preventDefault();
})