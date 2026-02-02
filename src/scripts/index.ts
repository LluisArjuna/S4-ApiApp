import { dadJokesRequest, chuckNorrisRequest, weatherRequest } from "./apiRequests.js";

import { newJoke, voteJoke, reportJokes } from "./jokes/jokesLogic.js";
import { showJoke, nextButton, currentScore } from "./jokes/jokesUI.js";

import { getWeather, location } from "./weather/weatherLogic.js";
import { showWeather } from "./weather/weatherUI.js";


const weatherData = await getWeather(weatherRequest(location.latitude, location.longitude));
showWeather(weatherData)

let currentJoke: string = "";

async function loadJoke() {
  const jokeData = await newJoke(dadJokesRequest, chuckNorrisRequest);
  currentJoke = jokeData.joke;
  showJoke(jokeData);
}

await loadJoke();

nextButton.addEventListener('click', async () => {
    voteJoke(currentScore, currentJoke);
    await loadJoke();
});

console.log(reportJokes);





