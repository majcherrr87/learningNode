import path, { basename, join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// const fullPath = join(__dirname, process.argv[2]);

const userPath = process.argv[2];

console.log(`dirname`, dirname(userPath));
console.log(`basename`, basename(userPath));
console.log(`extname`, extname(userPath));
