

fetch(`https://www.foaas.com/operations`) 
.then(response => {
  console.log(response);
  return response.json()})
.then(obj => {
  console.log(obj);
  
});

