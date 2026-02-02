import { getData } from "../asyncronApiCall.js";
import type { Joke, ReportedJoke, DadJokeApiResponse, ChuckNorrisApiResponse} from "../interfaces.js";


export async function newJoke(firstApi:Request, secondApi:Request):Promise<Joke> {
    const randomNumber = Math.round(Math.random())
    const randomRequest = randomNumber === 0 ? firstApi : secondApi;

    const jokeData = await getData(randomRequest);
    let joke: string;

    if (randomNumber === 0) {
        const data = await getData<DadJokeApiResponse>(firstApi);
        if (!data.joke) throw new Error("Invalid dad joke");
        joke = data.joke;
    } else {
        const data = await getData<ChuckNorrisApiResponse>(secondApi);
        if (!data.value) throw new Error("Invalid Chuck Norris joke");
        joke = data.value;
    }
    if (!joke) throw new Error("Invalid joke data");
    return {joke: joke}
}

export const reportJokes: ReportedJoke[] = [];

export function voteJoke(score: number | null, joke: string) {
    try {
        const report:ReportedJoke = {
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