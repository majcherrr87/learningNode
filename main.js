import { promisify } from "util";
import { exec } from "child_process";

const execPromisify = promisify(exec);

(async () => {
  try {
    const { stdout } = await execPromisify("ping 8.8.8.8");
    console.log(stdout);
  } catch (errorr) {
    console.error("oh no", err);
  }
})();
