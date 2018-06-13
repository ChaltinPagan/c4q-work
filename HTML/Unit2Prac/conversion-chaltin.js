textarea = document.querySelector("textarea");

number = document.getElementById("number");

base = document.getElementById("base");

binaryP = document.getElementById("binaryP");

decimalP = document.getElementById("decimalP");

hexP = document.getElementById("hexP");

buttonB = document.getElementById("binaryB");

buttonD = document.getElementById("decimalB");

buttonH = document.getElementById("hexB");

buttonB.addEventListener("click", (event) => {

    fetch("http://codyhess.com:9000/" + textarea.value)
    
    .then(function(response) {
        console.log(response);
        return response.json();
    }) 

    .then(function(myBlob) {
        console.log(myBlob);

        globalBlob = myBlob;

        obj1 = myBlob.original;
        number.innerText = "Original Number: ";
        number.innerText += " " + obj1.value;
        base.innerText = "Original Base: "
        base.innerText += " " + obj1.base;

        obj2 = myBlob.conversions;
        binaryP.innerText = "As Binary: ";
        binaryP.innerText += " " + obj2.binary;
        decimalP.innerText = "As Decimal: ";
        decimalP.innerText += " " + obj2.decimal;
        hexP.innerText = "As Hex: ";
        hexP.innerText += " " + obj2.hex;

        textarea.value = "";

    })
    
});

buttonD.addEventListener("click", (event) => {

    fetch("http://codyhess.com:9000/" + textarea.value)
    
    .then(function(response) {
        console.log(response);
        return response.json();
    }) 

    .then(function(myBlob) {
        console.log(myBlob);

        globalBlob = myBlob;

        obj1 = myBlob.original;
        number.innerText = "Original Number: ";
        number.innerText += " " + obj1.value;
        base.innerText = "Original Base: "
        base.innerText += " " + obj1.base;

        obj2 = myBlob.conversions;
        binaryP.innerText = "As Binary: ";
        binaryP.innerText += " " + obj2.binary;
        decimalP.innerText = "As Decimal: ";
        decimalP.innerText += " " + obj2.decimal;
        hexP.innerText = "As Hex: ";
        hexP.innerText += " " + obj2.hex;

        textarea.value = "";

    })
    
});

buttonH.addEventListener("click", (event) => {
    
        fetch("http://codyhess.com:9000/" + textarea.value)
        
        .then(function(response) {
            console.log(response);
            return response.json();
        }) 
    
        .then(function(myBlob) {
            console.log(myBlob);
    
            globalBlob = myBlob;
    
            obj1 = myBlob.original;
            number.innerText = "Original Number: ";
            number.innerText += " " + obj1.value;
            base.innerText = "Original Base: "
            base.innerText += " " + obj1.base;
    
            obj2 = myBlob.conversions;
            binaryP.innerText = "As Binary: ";
            binaryP.innerText += " " + obj2.binary;
            decimalP.innerText = "As Decimal: ";
            decimalP.innerText += " " + obj2.decimal;
            hexP.innerText = "As Hex: ";
            hexP.innerText += " " + obj2.hex;
    
            textarea.value = "";
    
        })
        
    });