import { readFile, writeFile, mkdir, rename } from "fs/promises";

(async () => {
  try {
    await rename("./data/text2.txt", "./megaK/text2.txt");
  } catch (e) {
    console.log(`Bład`, e);
  }
})();
