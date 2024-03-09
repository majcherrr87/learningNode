import { TickTock } from "./tic-tok.js";

const events = new TickTock();

events
  .on("socondElapsed", ({ test, name }) => {
    console.log(`cześć  ${test} co się nazywa ${name}`);
  })
  .on("fifeElapsed", ({ test, name }) => {
    console.log(`cześć  ${test} co się nazywa ${name}`);
  });
