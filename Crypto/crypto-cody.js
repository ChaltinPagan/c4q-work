//find the user with the plaintext password '123456'.
const { rt } = require("./rainbowtable");

const DB = require("better-sqlite3");
const db = new DB("./unsaltedusers.db");

const users = db.prepare(`SELECT * FROM users`).all();

//console.log("rt:", rt);

//console.log("users:", users);


let find = (pw) => {
    for (key in rt){
        if (key === pw) {
            return rt[key];
        }
    }
}

let findUser = () => {
    let pw = find("123456");
    let user = "";
    users.filter(el => {
        if (el.pass === pw) {
            return user += el.name;
        }
    })
    return user;
}

//console.log(find("123456"));
//console.log(findUser());


//Cody solution
for (let k in rt) {
    for (let i =0; i<users.length; i++) {
        if (users[i].pass === rt[k]) {
            console.log(`The password of ${users[i].name} is ${k}.`);
        }
    }
}