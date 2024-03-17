import { createServer } from "http";
import { readFile } from "fs/promises";

const server = createServer();

server
  .on("request", async (req, res) => {
    const html = await readFile("./index.html", "utf-8");

    res.writeHead(200, {
      "Content-Type": "text/html",
      "X-Kot": "Hello World MegaK",
    });

    res.end(html);
  })
  .listen(3000, "127.0.0.1");
