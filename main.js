import { decryptText, encryptText } from "./cipher.js";

const SALT =
  "dff734riddsf82r28ry sdfsdfasdffsdfSDwfwe233@$@$%#$65^$&6GdfgFDg6&%^7RTgsFsdTsgSFg28*&&%$&*HHGDAYTRR";

(async () => {
  const encrypted = await encryptText(
    "Hej to jest tajna wiadomość do lisy kotóch",
    "123Kiełbasa",
    SALT
  );
  console.log(``, encrypted);
})();
