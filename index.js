import fetch from "node-fetch";

const cityName = process.argv[2];

const processWeatherData = (data) => {};

fetch("https://danepubliczne.imgw.pl/api/data/synop")
  .then((r) => r.json())
  .then(processWeatherData);
//21:50
