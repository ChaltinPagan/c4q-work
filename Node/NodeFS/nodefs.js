const fs = require('fs');

//writing files
// fs.writeFile('lyrics-1.txt', "I threw a wish in the well\nDon't ask me I'll never tell", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('The file has been saved!');
// });

// //reading files
// fs.readFile('lyrics-1.txt', "utf8", function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// fs.writeFile('lyrics-2.txt', "I looked at you as it fell\nAnd now you're in my way", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('The file has been saved!');
// });

// fs.readFile('lyrics-2.txt', "utf8", function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

var words1, words2, words3;
words1 = fs.readFileSync("lyrics-1.txt", "utf8");
words2 = fs.readFileSync("lyrics-2.txt", "utf8");
words3 = words1 + "\n" + words2

fs.writeFile('lyrics-3.txt', words3, (err) => {
    if (err) throw err;
});


fs.readFile('lyrics-3.txt', "utf8", function(err, data) {
    if (err) throw err;
    console.log(data);
});

/*
//create folder
fs.mkdir('folder-1', () => {
    console.log('Created a folder!')
  });

//remove folder
//fs.rmdir('folder-1');

//Remove With a callback

fs.rmdir('another-new-repo', (err, data) => {
    if(err) console.log('Error!', err);
    console.log('Deleted another new repo!')
  });


//rename folder
fs.rename('folder-1', 'new-folder-1');

fs.rmdir('new-folder-1');
*/

/*
eventType = "lyrics-1"
filename = "txt"

fs.watch('NODEFS', (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
      console.log(`filename provided: ${filename}`);
    } else {
      console.log('filename not provided');
    }
  });
*/

//make 100 folders and remove
/*
fs.mkdir("MYFOLDER", err => {if (err) throw err; });
fs.rmdir("MYFOLDER", err => {if (err) throw err; });

for (let i=1; i<=100; i++) {
    fs.stat("folder-" +i, (err, stat) => {
        if(!stat) {
            fs.mkdirSync("folder-" +i, err => {if (err) throw err;});
        }
    })
}


for (let i=1; i<=100; i++) {
    fs.stat("folder-" +i, (err, stat) => {
        if(stat) {
            fs.rmdirSync("folder-" +i, err => {if (err) throw err;});
        }
    })
}
*/