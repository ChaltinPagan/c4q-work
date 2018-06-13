var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var ducks = [
  {
    type: 'cowboy',
    sold: 0
  },
  {
    type: 'vampire',
    sold: 0
  }
]
function createDuck( type ) {
  return {
    type: type,
    sold: 0
  }
}

rl.on('line', (input) => {
  var command = input.split(' ')[0];

  var anytype = input.split(' ')[1];
  
    //invoked when input type not already in array
    function createSoldDuck(type) {
     return  {
      type: type,
      sold: 1
      }
     }
     
      if (command === 'sellone') {
        
        ducks.forEach( el=> {
          if (el.type === anytype){
             (el.sold += 1)
          } else {
            ducks.push({type: anytype, sold: 1})
          } 
        })
        
      } 


    //     for (var i = 1; i < ducks.length; i++){
    //         if (ducks.type[i] === anytype){
    //             return el.sold += 1
    //         } else if (ducks.type[i] !== anytype){
    //            return  ducks.push(createSoldDuck(anytype))
    //         } else {
    //            return ducks.type[i]
    //         }
    //     }
    // }

      
        //   ducks.map( el => {

        //     if (el.type === anytype) {
        //         el.sold += 1
        //     } else if (el.type !== anytype) {
        //         ducks.push(createDuck(anytype))
        //         el.sold += 1
        //     } else {
        //         el
        //     }

        //   })
        // }
  

  if (command === 'showall') {
    ducks.forEach( (el) => {
      console.log( el );
    });

}
})
  
