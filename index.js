import { writeFile, readFile, appendFile } from "fs/promises";
const FILE_NAME = "./data/hello.txt";
(async () => {
  try {
    const numberOfFile = await readFile(FILE_NAME, "utf8");

    const arr = numberOfFile.split("\n");

    const lastElementOfArray = arr[arr.length - 1];

    await appendFile(FILE_NAME, `\n${lastElementOfArray * 2}`, "utf8");
    console.log(`file is saved`);
  } catch (e) {
    console.log(`coś poszło nie tak `, e);
  }
})();
