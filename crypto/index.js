var crypto = require("crypto");

/* 
CRYPTO Module - The crypto module provides a way of handling encrypted data.

Crypto Properties and Methods
-----------------------------

Method	                    Description
constants	                Returns an object containing Crypto Constants
fips	                    Checks if a FIPS crypto provider is in use
createCipher()	            Creates a Cipher object using the specific algorithm and password
createCipheriv()	        Creates a Cipher object using the specific algorithm, password and initialization vector
createDecipher()	        Creates a Decipher object using the specific algorithm and password
createDecipheriv()	        Creates a Decipher object using the specific algorithm, password and initialization vector
createDiffieHellman()	    Creates a DiffieHellman key exchange object
createECDH()	            Creates an Elliptic Curve Diffie Hellmann key exchange object
createHash()	            Creates a Hash object using the specified algorithm
createHmac()	            Creates a Hmac object using the specified algorithm and key
createSign()	            Creates a Sign object using the specified algorithm and key
createVerify()	            Creates a Verify object using the specified algorithm
getCiphers	                Returns an array of supported cipher algorithms
getCurves()	                Returns an array of supported elliptic curves
getDiffieHellman()	        Returns a predefined Diffie Hellman key exchange object
getHashes()	                Returns an array of supported hash algorithms
pbkdf2()	                Creates a Password Based Key Derivation Function 2 implementation
pbkdf2Sync()	            Creates a synchronous Password Based Key Derivation Function 2 implementation
privateDecrypt()	        Decrypts data using a private key
timingSafeEqual()	        Compare two Buffers and returns true is they are equal, otherwise false
privateEncrypt()	        Encrypts data using a private key
publicDecrypt()	            Decrypts data using a public key
publicEncrypt()	            Encrypts data using a public key
randomBytes()	            Creates random data
setEngine()	                Sets the engine for some or all OpenSSL function

*/

// Defining algorithm
const algorithm = "aes-256-cbc";

// Defining key
const key = crypto.randomBytes(32);

// Defining iv
const iv = crypto.randomBytes(16);

/* ---------- Encryption Method --------- */
function encrypt(text) {
  // Creating Cipheriv with its parameter
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);

  // Updating text
  let encrypted = cipher.update(text);

  // Using concatenation
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  // Returning iv and encrypted data
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

// Displays output
var output = encrypt("Testing Purpose");
console.log(output);

/* ---------- Decryption Method --------- */
function decrypt(text) {
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, "hex");

  // Creating Decipher
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);

  // Updating encrypted text
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  // returns data after decryption
  return decrypted.toString();
}

const decrypted = decrypt(output);
console.log("Decrypted : ", decrypted);
