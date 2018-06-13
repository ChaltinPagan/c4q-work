// https://nodejs.org/api/crypto.html#crypto_class_cipher
// 'aes256' -> AES256 - CBC
// The available ciphers depend on openssl. See ``$> openssl list-cipher-algorithms`` for a list.
const crypto = require("crypto");

const encrypt = (key, plaintext) => {
  const cipher = crypto.createCipher("aes256", key);
  let ciphertext = cipher.update(plaintext, "utf8", "hex");
  ciphertext += cipher.final("hex");
  return ciphertext;
};

const decrypt = (key, ciphertext) => {
  const decipher = crypto.createDecipher("aes256", key);
  let plaintext = decipher.update(ciphertext, "hex", "utf8");
  plaintext += decipher.final("utf8");
  return plaintext;
};

const key = "password123";
const plaintext = "2";
let ciphertext = encrypt(key, plaintext);
console.log("Encrypted:", ciphertext);
const decryptedPlaintext = decrypt(key, ciphertext);
console.log("Decrypted:", decryptedPlaintext);

// 1. Try making the plaintext longer/shorter, what happens to the ciphertext?
//    - What are the two smallest lengths of the output?
// 2. Does changing the key seem to matter?
// 3. What happens if you supply the wrong key to the decrypt?
// 4. (We will address this later in the talk) This isn't AES256 until we supply it a key that has
//    256-bits of complexity.
// Extra: Switch to a different cipher.