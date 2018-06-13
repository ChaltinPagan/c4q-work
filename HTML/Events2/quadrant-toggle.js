var body = null;

document.addEventListener('DOMContentLoaded', (event) => {

    body = document.getElementById("body");

  document.addEventListener('click', (event) => {

    

    if (event.target.style.backgroundColor !== 'white') {
        
        event.target.style.backgroundColor = 'black';
    
    } else {
    
        event.target.style.backgroundColor = 'white';
    
    }

  });

});