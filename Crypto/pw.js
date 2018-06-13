const crypto = require("crypto");

class Db {
  constructor(users={}) {
    this.users = users;
  }

  // Expects passwordPayload to be a string of the form 'salt$passwordHash'
  // Where the '$' is used as a separator.
  storeUser(username, passwordPayload) {
    this.users[username] = passwordPayload;
  }

  getUserPassword(username) {
    let hash = this.users[username];
    return {
      salt: hash.substr(0, hash.indexOf('$')),
      passwordHash: hash.substr(hash.indexOf('$') + 1)
    };
  }
}
const db = new Db();


// STUDENT CODE STARTS HERE ------------

const hashPassword = (password, salt) => {
  // TODO (1) create a passwordHash using the crypto.pbkdf2Sync command and sha256.
  // https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest
  // it should have a key length of 64. I'll leave the iteration count up to you though.
  // The parameters are (in order): password, salt, iterations, keylength, hashFunctionName
  // const passwordHash = ...
    const passwordHash = crypto.pbkdf2Sync(password, salt, 70451, 64, 'sha256');
    return passwordHash.toString('hex');
};

//console.log(hashPassword("123456", "hello"));

const saveUser = (username, password) => {
  // TODO (2) Generate a salt using crypto.randomBytes in 'hex' format. (length 64)
  // https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback
  // const salt = ...
    const salt = crypto.randomBytes(64).toString('hex');
  // TODO (3) Hash the password using the hashPassword function.
  // const passwordHash = ...
    const passwordHash = hashPassword(password, salt);
  // TODO (4) create payload (string) of the form 'salt$passwordHash'
  // const payload = ...
    const payload = `${salt}$${passwordHash}`;
  db.storeUser(username, payload);
};

// Return true if authenticated, false otherwise.
const isUserAuthenticated = (username, password) => {

  // TODO (5) Get the users password payload from the database.
  // let payload = ...
    let payload;
    try {
        payload = db.getUserPassword(username);
    } catch (err) {
        if (!(err instanceof TypeError)) throw error;
        //insert work
        //prevents hacker from figuing out false users
        //false users will return 'false' mre quickly than authentcated users
        hashPassword('notARealPassword', 'SaltBetterThanPepper');
        return false;
    }
    
  // TODO (6) If the user is not in the database it will throw a TypeError, you should catch
  // and deal with it.
    const { salt, passwordHash } = payload;
  // TODO (10) Return the comparison of the passwords using the comparePasswords function.
  // return comparePasswords(...);
    return comparePasswords(password, salt, passwordHash);
};

// returns true if passwords match, otherwise false.
const comparePasswords = (plaintextPassword, salt, passwordHashFromDb) => {
  // TODO (7) Hash the plaintextPassword using the salt.
  const comparisonPasswordHash = hashPassword(plaintextPassword, salt);
  // TODO (8) compare the passwordHash you just created with the one from the database.
  const arePasswordsTheSame = comparisonPasswordHash === passwordHashFromDb;
  // TODO (9) Return true if they match otherwise return false.
  return arePasswordsTheSame;
  //return hashPassword(plaintextPassword, salt) === passwordHashFromDb;
};

// STUDENT CODE ENDS HERE ------------

saveUser('jane@email.com', '123456qwerty');

console.time('1');
console.log(isUserAuthenticated('jane@email.com', 'HelloWorld!'))            // false
console.timeEnd('1');

console.time('2');
console.log(isUserAuthenticated('jane@email.com', 'HelloWorld!'))            // false
console.timeEnd('2');

console.time('3');
console.log(isUserAuthenticated('iAmNotInTheDb@email.com', 'HelloWorld!'))   // false
console.timeEnd('3');

console.time('4');
console.log(isUserAuthenticated('jane@email.com', '123456qwerty'))            // true
console.timeEnd('4');