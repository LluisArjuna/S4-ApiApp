export const dadJokesRequest = new Request('https://icanhazdadjoke.com/', {
  headers: { "Accept": "application/json" }
});

export const chuckNorrisRequest = new Request('https://api.chucknorris.io/jokes/random');