import type { weather } from "../interfaces";

const temp = document.getElementById('temperature') as HTMLParagraphElement;
const icon = document.getElementById('icon') as HTMLImageElement;
const desc = document.getElementById('description') as HTMLParagraphElement;

export function showWeather (weather:weather) {
    try {
        temp.textContent = String(weather.temperature);
        icon.src = weather.icon;
        icon.alt = weather.description;
        desc.textContent = weather.description;
    } catch (error) {
        console.error("Error: ",error);
        temp.textContent = 'Hi ha hagut un error carregant el temps.';
    }
};