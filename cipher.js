import { promisify } from "util";
import {
  scrypt,
  randomBytes,
  createCipheriv,
  createDecipheriv,
  createHmac,
} from "crypto";
const SALT = "dfdffojweofwehrewihfwe ewo2o whw84ywweer";

const scryptPromisify = promisify(scrypt);
const randomBytesPromisify = promisify(randomBytes);

export async function encryptText(text, password, salt) {
  const algorithm = "aes-192-cbc";
  const key = await scryptPromisify(password, salt, 24);
  const iv = await randomBytesPromisify(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return {
    encrypted,
    iv: iv.toString("hex"),
  };
}
export async function decryptText(text, password, salt, ivHex) {
  const algorithm = "aes-192-cbc";
  const key = await scryptPromisify(password, salt, 24);
  const iv = Buffer.from(ivHex, "hex");

  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
export function hash(text, salt) {
  return createHmac("sha512", salt).update(text).digest("hex");
}
