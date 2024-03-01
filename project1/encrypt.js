import { readFile, writeFile } from "fs/promises";
import { encryptBinary, hash } from "../cipher.js";
import { ENCRYPTION_SALT, HASH_SALT } from "../constants.js";

const [, , fileName, password] = process.argv;

(async () => {
  try {
    const content = await readFile(fileName);
    const encrypted = await encryptBinary(content, password, ENCRYPTION_SALT);
    const contentHash = hash(content, HASH_SALT);

    await writeFile(
      fileName,
      JSON.stringify({ ...encrypted, contentHash }),
      "utf8"
    );
    console.log("Zrobione");
  } catch (e) {
    console.error("Bład", e);
  }
})();
