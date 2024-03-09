import fetch from "node-fetch";

const processWeatherData = async (data) => {
  const sorted = [...data].sort((a, b) => b.temperatura - a.temperatura);
  sorted.map(({ stacja, temperatura }) => {
    console.log(stacja, temperatura);
  });
};

const findWormestPlaceInPolend = async () => {
  try {
    const res = await fetch("https://danepubliczne.imgw.pl/api/data/synop");
    const data = await res.json();
    const newData = data.map((element) => ({
      ...element,
      temperatura: Number(element.temperatura),
    }));

    await processWeatherData(newData);
  } catch (e) {
    console.log(`Error has occurred ;)`, e);
  }
};

findWormestPlaceInPolend();
