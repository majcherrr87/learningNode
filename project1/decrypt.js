import { readFile, writeFile } from "fs/promises";
import { decryptText } from "../cipher.js";

const [, , fileName, password] = process.argv;
const SALT = "dfdffojweofwehrewihfwe ewo2o whw84ywweer";

(async () => {
  try {
    const content = await readFile(fileName, "utf8");
    const { encrypted, iv } = JSON.parse(content);

    const decrypted = await decryptText(encrypted, password, SALT, iv);
    await writeFile(fileName, decrypted, "utf8");
  } catch (e) {
    console.error("Bład", e);
  }
})();
