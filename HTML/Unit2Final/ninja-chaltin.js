button = document.querySelector("button");

ol = document.querySelector("ol");

input = document.querySelector("input");

li = document.getElementsByTagName("li");


button.addEventListener("click", (event) => {
    event.preventDefault();
    li = document.createElement("li");
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = "";
})

ol.addEventListener("click", (event) => {
    
    event.target.style.textTransform = "uppercase";
    
})
