import fetch from "node-fetch";
import { appendFile } from "fs/promises";
import { normalize, resolve } from "path";

function safeJoin(base, target) {
  const targetpath = "." + normalize("/" + target);
  return resolve(base, targetpath);
}
const getDataFIleName = (city) => safeJoin(`./data/`, `${city}.txt`);

const processWeatherData = async (data, cityName) => {
  const newData = data.find((ele) => ele.stacja === cityName);
  if (!newData) {
    throw new Error(`Podaj nazwę polskiego miasta`);
  }
  const {
    cisnienie: pressure,
    wilgotnosc_wzgledna: humidity,
    temperatura: temperature,
  } = newData;

  const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure}hPa.`;
  console.log(``, weatherInfo);

  const dataTimeString = new Date().toLocaleString();

  await appendFile(
    getDataFIleName(cityName),
    `save ${dataTimeString}  ${weatherInfo}\n`
  );
};

const checkCityWeather = async (cityName) => {
  try {
    const res = await fetch("https://danepubliczne.imgw.pl/api/data/synop");
    const data = await res.json();
    await processWeatherData(data, cityName);
  } catch (e) {
    console.log(`Error has occurred ;)`, e);
  }
};

checkCityWeather(process.argv[2]);
