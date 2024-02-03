import { readFile, writeFile } from "fs/promises";

const FILE_NAME = "./data/input1.json";

(async () => {
  try {
    const result = await readFile(FILE_NAME, "utf8");
    const tab = JSON.parse(result);
    const sum = tab.reduce((acumulator, current) => acumulator + current, 0);
    await writeFile("./data/sum.txt", String(sum));

    console.log(`Plik został zapisany, suma to ${sum}`);
  } catch (e) {
    if (e.code === "ENOENT") {
      console.log(`File is not valid!`);
    } else {
      console.log(`File`);
    }
  }
})();
