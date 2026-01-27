import { getData } from "../asyncronApiCall.js";
import type { joke, reportedJoke } from "../interfaces.js";

export async function newJoke(firstApi:Request, secondApi:Request):Promise<joke> {
    const randomNumber = Math.round(Math.random())
    const randomRequest = randomNumber === 0 ? firstApi : secondApi;

    const jokeData = await getData(randomRequest);
    let joke: string;

    if (randomNumber === 0) {
        joke = jokeData.joke;
    } else {
        joke = jokeData.value;
    }
    if (!joke) throw new Error("Invalid joke data");
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