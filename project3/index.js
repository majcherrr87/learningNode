import { Restaurant } from "./restaurant.js";

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
  .on("open", (text) => {
    console.log(text);
  })
  .on("takeTable", (text) => {
    tablesCount += -1;
    console.log(`${text} Dotępna liczba stolików ${tablesCount}`);
  })
  .on("reserveTable", (text) => {
    tablesCount += -1;
    console.log(`${text} Dotępna liczba stolików ${tablesCount}`);
  })
  .on("cancelTable", (text) => {
    tablesCount += 1;
    console.log(`${text} Dotępna liczba stolików ${tablesCount}`);
  })
  .on("cleanupTable", (text) => {
    tablesCount += 1;
    console.log(`${text} Dotępna liczba stolików ${tablesCount}`);
  })
  .on("close", (text) => {
    tablesCount += 1;
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
