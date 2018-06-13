//var body = null;

document.addEventListener('DOMContentLoaded', (event) => {

    button = document.querySelector("input");
    body = document.querySelector("body");
    
  button.addEventListener('click', (event) => {

    
    newimg = document.createElement("img");

    newimg.src="http://www.clipartbest.com/cliparts/KTj/gxz/KTjgxz7ac.gif";

    
        
        
        body.appendChild(newimg);
    
    

  });

});