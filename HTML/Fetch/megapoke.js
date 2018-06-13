input = document.querySelector("input");

ability = document.getElementById("ability");
character = document.getElementById("character");
pokeathlon = document.getElementById("pokeathlon");

result = document.getElementById("result");

document.addEventListener("DOMContentLoaded", (event) => {


ability.addEventListener("click", (event) => {

    fetch('https://pokeapi.co/api/v2/pokemon/'+input.value+'/', {
        method: 'GET',
        mode: 'cors'
        })

        .then(function(response) {
            console.log(response);
            return response.json();
          })
          .then(function(myBlob) {
            console.log(myBlob);

            globalBlob = myBlob;
            console.log(myBlob.abilities);

            arr = myBlob.abilities;

            result.innerText = "";
            
            for (var i = 0; i <= arr.length; i++) {
                
                    result.innerText += "Abilities: " + arr[i].ability.name + "\n";
                    
            }
            
          })
          .catch(function(error) {
              console.log(error)

              result.innerText += "That's not a pokemon."
          })
        
})

pokeathlon.addEventListener("click", (event) => {
    
        fetch('https://pokeapi.co/api/v2/pokemon/'+input.value+'/', {
            method: 'GET',
            mode: 'cors'
            })
    
            .then(function(response) {
                console.log(response);
                return response.json();
              })
              .then(function(myBlob) {
                console.log(myBlob);
    
                globalBlob = myBlob;
                console.log(myBlob.characteristics);
    
                arr = myBlob.stats;
    
                result.innerText = "";
                
                for (var i = 0; i <= arr.length; i++) {
                    
                    result.innerText += "Stats: " + arr[i].stat.name + "\n";
                    
                }
                
              })
            
    })


})