import { getData } from "../asyncronApiCall.js";
import type { Weather, OpenWeatherApiResponse} from "../interfaces.js";


async function getCurrentLocation() {
    if (!navigator.geolocation) {
        throw new Error("Geolocation not supported");
    }
    const position = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
    return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    };
}

export const location = await getCurrentLocation();

export async function getWeather(weatherApi:Request):Promise<Weather> {
    const data = await getData<OpenWeatherApiResponse>(weatherApi);
    try {
        return {
            temperature: data.main.temp,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            description: data.weather[0].description,
        }
    } catch (error) {
        console.error("Error: ",error);
        throw (error);   
    }
}