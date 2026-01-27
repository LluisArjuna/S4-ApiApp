import { newJoke, voteJoke, reportJokes } from "./jokes/jokesLogic.js";
import { showJoke, nextButton, currentScore } from "./jokes/jokesUI.js";
import { dadJokesRequest, chuckNorrisRequest } from "./apiRequests.js";

let currentJoke: string = "";

async function loadJoke() {
  const jokeData = await newJoke(dadJokesRequest, chuckNorrisRequest);
  currentJoke = jokeData.joke;
  showJoke(jokeData);
}

await loadJoke();

nextButton.addEventListener('click', async () => {
    voteJoke(currentScore, currentJoke);
    loadJoke();
});

console.log(reportJokes);





