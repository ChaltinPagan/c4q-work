console.log('hello world');
document.addEventListener('DOMContentLoaded', () => {
  let rP = document.querySelector('#responseP');
  let cB = document.querySelector('#codyB');
  let rockB = document.querySelector('#rockB');
  let paperB = document.querySelector('#paperB');
  let scissorsB = document.querySelector('#scissors');
  });

  rockB.addEventListener('click', (event) => {
    fetch('/play/rock')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      rP.innerText = `You choose ${obj.user}. \n`;
      rP.innerText += `Computer chooses ${obj.comp}. \n`;
      rP.innerText += `You ${obj.result}. \n`;
      console.log(obj);
    });
  });

  paperB.addEventListener('click', (event) => {
    fetch('/play/paper')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      rP.innerText = `You choose ${obj.user}. \n`;
      rP.innerText += `Computer chooses ${obj.comp}. \n`;
      rP.innerText += `You ${obj.result}. \n`;
      console.log(obj);
    });
  });

  scissorsB.addEventListener('click', (event) => {
    fetch('/play/scissors')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      rP.innerText = `You choose ${obj.user}. \n`;
      rP.innerText += `Computer chooses ${obj.comp}. \n`;
      rP.innerText += `You ${obj.result}. \n`;
      console.log(obj);
    });
  });

});
