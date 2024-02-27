import { readFile, writeFile } from "fs/promises";
import { encryptText } from "../cipher.js";

const [, , fileName, password] = process.argv;
const SALT = "dfdffojweofwehrewihfwe ewo2o whw84ywweer";

(async () => {
  try {
    const content = await readFile(fileName, "utf8");
    const encrypted = await encryptText(content, password, SALT);
    await writeFile(fileName, JSON.stringify(encrypted), "utf8");
  } catch (e) {
    console.error("Bład", e);
  }
})();
