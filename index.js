import { readFile } from "fs/promises";

(async () => {
  try {
    const data = await readFile("./text.txt", {
      encoding: "utf8",
    });
    console.log(``, data);
  } catch (error) {
    console.error(`Bład`, error);
  }
})();
