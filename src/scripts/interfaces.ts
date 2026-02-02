export interface DadJokeApiResponse {
  joke: string;
}

export interface ChuckNorrisApiResponse {
  value: string;
}

export interface OpenWeatherApiResponse {
  main: {
    temp: number;
  };
  weather: [{
    icon: string;
    description: string;
  }];
}


export interface Joke {
  joke: string
}

export interface ReportedJoke {
  joke: string;
  score: number | null;
  date: string;
}

export interface Weather {
  temperature: number;
  icon: string;
  description: string;
}
