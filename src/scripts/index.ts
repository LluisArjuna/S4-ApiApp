import { newJoke, voteJoke, reportJokes } from "./jokes/jokesLogic.js";
import { showJoke, nextButton, currentScore } from "./jokes/jokesUI.js";

let currentJoke: string = "";

async function loadJoke() {
  const jokeData = await newJoke();
  currentJoke = jokeData.joke;
  showJoke(jokeData);
}

await loadJoke();

nextButton.addEventListener('click', () => {
    voteJoke(currentScore, currentJoke)
    loadJoke();
});

console.log(reportJokes)





