export const dadJokesRequest = new Request('https://icanhazdadjoke.com/', {
  headers: { "Accept": "application/json" }
});

export const chuckNorrisRequest = new Request('https://api.chucknorris.io/jokes/random');



export function weatherRequest(lat: number, lon: number) {
  const apiKey = "ba38e628b053018df7e0bdf040e6bd26";

  return new Request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ca`, {
    headers: { "Accept": "application/json" }
  });
}



