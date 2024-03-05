import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";

(async () => {
  await pipeline(createReadStream("foto.jpg"), createWriteStream("foto2.jpg"));
  console.log("done!");
})();
