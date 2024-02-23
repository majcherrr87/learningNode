import { hash, compare } from "bcrypt";

hash("to jest text do hashowania", 10, (err, hash) => {
  if (err) throw new Error();
  console.log(hash);
  compare("to jest text do hashowania.", hash, (err, res) => {
    if (res) {
      console.log("logged in");
    } else {
      console.log("Nooo");
    }
  });
});
