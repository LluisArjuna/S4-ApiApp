async function getData(request: RequestInfo | URL) {
  try {
    const response = await fetch(request);
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;

  } catch (error) {
    console.error("Error: ",error);
  }
}

const dadJokesRequest = new Request('https://icanhazdadjoke.com/', {
  headers: { "Accept": "application/json" }
});

const jokeElement = document.getElementById('joke') as HTMLParagraphElement;
const nextButton = document.getElementById('next-joke') as HTMLButtonElement;

const showJoke = async () => {
    try {
        const joke = await getData(dadJokesRequest);
        jokeElement.textContent = joke.joke;
    } catch (error) {
        console.error("Error: ",error);
        jokeElement.textContent = 'Hi ha hagut un error carregant l’acudit.';
    }
};

showJoke();
nextButton.addEventListener('click', showJoke);
