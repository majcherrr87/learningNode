import { hash, compare } from "bcrypt";

const password = process.argv[2];

compare(
  password,
  "$2b$10$N7LS9CuysNg8wlFESjP1nuP7EhVLK7i3wyeDipYNpRJPnmk62p0Ou",
  (err, res) => {
    if (res) {
      console.log("logged in");
    } else {
      console.log("Nooo");
    }
  }
);
