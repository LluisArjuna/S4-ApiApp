export interface joke {
  joke: string
}

export interface reportedJoke {
  joke: string;
  score: number | null;
  date: string;
}

export interface weather {
  temperature: number;
  icon: string;
  description: string;
}
