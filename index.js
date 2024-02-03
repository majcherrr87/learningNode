import { rm } from "fs/promises";

(async () => {
  const oldFile = process.argv[2];
  const newFile = process.argv[3];
  try {
    rm(oldFile, {
      recursive: true,
    });
  } catch (e) {
    if (e.code === "ENOENT") {
      console.log(`${oldFile} does not exist`);
    }
  }
})();
