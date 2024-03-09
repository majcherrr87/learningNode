import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { createDecipheriv, randomBytes } from "crypto";
import { promisify } from "util";
import { scrypt } from "crypto";
import { ENCRYPTION_SALT } from "../oldFile/constants.js";
const proScrypt = promisify(scrypt);
const randomBytesPromisify = promisify(randomBytes);

const [, , inputFile, outputFile, pwd] = process.argv;

(async () => {
  const algorytm = "aes-192-cbc";
  const key = await proScrypt(pwd, ENCRYPTION_SALT, 24);
  const iv = await randomBytesPromisify(16);

  await pipeline(
    createReadStream(inputFile),
    createDecipheriv(algorytm, key, iv),
    createWriteStream(outputFile)
  );

  console.log("Done.");
})();
