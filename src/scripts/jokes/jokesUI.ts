import type { Joke } from "../interfaces";

const jokeElement = document.getElementById('joke') as HTMLParagraphElement;
export const nextButton = document.getElementById('next-joke') as HTMLButtonElement;

export let currentScore: number | null = null;

export function showJoke (joke:Joke) {
    try {
        jokeElement.textContent = joke.joke;
        currentScore = null;
    } catch (error) {
        console.error("Error: ",error);
        jokeElement.textContent = 'Hi ha hagut un error carregant l’acudit.';
    }
};

const score1 = document.getElementById('score_1') as HTMLButtonElement;
const score2 = document.getElementById('score_2') as HTMLButtonElement;
const score3 = document.getElementById('score_3') as HTMLButtonElement;

score1.addEventListener('click', () => currentScore = 1);
score2.addEventListener('click', () => currentScore = 2);
score3.addEventListener('click', () => currentScore = 3);




