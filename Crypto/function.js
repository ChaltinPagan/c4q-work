const crypto = require("crypto");

const hashFunction = crypto.createHash("sha256");
const plaintext = "123456";
hashFunction.update(plaintext);
const hash = hashFunction.digest("hex");

console.log(hash);

// Things to try:
//   - Make the plaintext longer and shorter. Does it affect the hashes output length?
//   - Does running it twice with the same plaintext produce the same result? (aka is the result predictable?)
//
// Extra:
//  - Refactor into a function that returns the hashed value.
//    makeHash("123456") returns "<hashedvalue as hex>"
//    (tip: the hashFunction is NOT reusable and must be instantiated
//    inside the function).
// Extra 2:
//  - Call it twice. makeHash(makeHash("123456")) is the output different from just calling it once?