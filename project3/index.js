import { Restaurant } from "./restaurant.js";

const megaRestaurant = new Restaurant();
let tablesCount = 25;

const decTableCount = ({ count, message }) => {
  tablesCount += count;
  console.log(`${message} Dotępna liczba stolików ${tablesCount}`);
};
const incTableCount = ({ count, message }) => {
  tablesCount += count;
  console.log(`${message} Dotępna liczba stolików ${tablesCount}`);
};
megaRestaurant
  .on("open", (text) => {
    console.log(text);
  })
  .on("tableCountChange", (text) => decTableCount(text))
  .on("close", (text) => {
    console.log(`${text}`);
  });

megaRestaurant.open();

megaRestaurant.takeTableWithoutReservawtion();

megaRestaurant.takeTableWithoutReservawtion();

megaRestaurant.reserveTable();

megaRestaurant.cancelTableReservation();

megaRestaurant.reserveTable();

megaRestaurant.reserveTable();

megaRestaurant.takeTableWithoutReservawtion();

megaRestaurant.takeTableWithoutReservawtion();

megaRestaurant.cleanupTable();

megaRestaurant.close();
