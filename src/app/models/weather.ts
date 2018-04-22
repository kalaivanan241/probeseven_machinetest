
export class Weather {

    id: number;
    city: string;
    temp: number;
    climate: string;
    date: Date;
    wind: number;
    cloudness: number;
    pressure: number;
    humidity: number;
    rain: number;
    sunrise: string;
    sunset: string;
    geo: string;

    constructor() {
        this.id = 0;
        this.city = '';
        this.climate = '';
        this.date = null;
        this.wind = 0;
        this.cloudness = 0;
        this.pressure = 0;
        this.humidity = 0;
        this.rain = 0;
        this.sunrise = '';
        this.sunset = '';
        this.geo = '';
    }
}
