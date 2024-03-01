import { readFile, writeFile } from "fs/promises";
import { decryptText, hash } from "../cipher.js";
import { ENCRYPTION_SALT, HASH_SALT } from "../constants.js";

const [, , fileName, password] = process.argv;

(async () => {
  try {
    const content = await readFile(fileName, "utf8");
    const { encrypted, iv, contentHash } = JSON.parse(content);

    const decrypted = await decryptText(
      encrypted,
      password,
      ENCRYPTION_SALT,
      iv
    );
    const currentHash = hash(decrypted, HASH_SALT);

    if (contentHash === currentHash) {
      await writeFile(fileName, decrypted, "utf8");
      console.log("Odszyfrowano prawidłowi oba pliki są identyczne.");
    } else {
      console.log("File is not original");
    }
  } catch (e) {
    console.error("Bład coś poszło nie tak", e);
  }
})();
