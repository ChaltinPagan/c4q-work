const fs = require('fs');

for (let i=1; i<=100; i++) {
  fs.stat("folder-" +i, (err, stat) => {
      if(stat) {
          fs.rmdirSync("folder-" +i, err => {if (err) throw err;});
      }
  })
}