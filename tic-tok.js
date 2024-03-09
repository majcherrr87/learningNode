import { EventEmitter } from "events";

export class TickTock extends EventEmitter {
  constructor() {
    super();

    setInterval(() => {
      this.emit("socondElapsed", { test: "Kot", name: "Lisa" });
    }, 1000);

    setInterval(() => {
      this.emit("fifeElapsed", { test: "Kot", name: "Ilona" });
    }, 5000);
  }
}
