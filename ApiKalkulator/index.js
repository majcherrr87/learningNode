import { createServer } from "http";
import { calc } from "./calc.js";

const server = createServer();

let counter = 1;

server
  .on("request", (req, res) => {
    const [, operation, a, b] = req.url.split("/");

    const result = calc(operation, Number(a), Number(b));
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end(result + "");
  })
  .listen(3000, "127.0.0.1");
