import { getData } from "../asyncronApiCall.js";
import type { joke, reportedJoke } from "../interfaces.js";

export const dadJokesRequest = new Request('https://icanhazdadjoke.com/', {
  headers: { "Accept": "application/json" }
});

export async function newJoke():Promise<joke> {
    const jokeData = await getData(dadJokesRequest);
    let joke = jokeData.joke
    return {joke: joke}
}

export const reportJokes: reportedJoke[] = [];

export function voteJoke(score: number | null, joke: string) {
    try {
        const report:reportedJoke = {
            joke: joke,
            score: score,
            date: new Date().toISOString(),
        }
        reportJokes.push(report);
        console.log(reportJokes);
    } catch (error) {
        console.error("Error: ",error);
    }
};