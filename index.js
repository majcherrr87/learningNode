import { writeFile, readFile, appendFile } from "fs/promises";
const FILE_NAME = "./data/hello.txt";
(async () => {
  try {
    const numberOfFile = Number(await readFile(FILE_NAME, "utf8"));

    await writeFile(FILE_NAME, String(numberOfFile * 2), "utf8");
    console.log(`file is saved`);
  } catch (e) {
    console.log(`coś poszło nie tak `, e);
  }
})();
