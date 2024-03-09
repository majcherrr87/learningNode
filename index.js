import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";

(async () => {
  await pipeline(
    createReadStream("json2.json"),
    createGunzip(),
    createWriteStream("json3.json")
  );
  console.log("done!");
})();
