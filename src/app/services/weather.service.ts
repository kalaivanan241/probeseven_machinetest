import { Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(public http: Http) { }

  getWeather(city: string) {
    return this.http.get(`api/weather/${city}`).map(res => { console.log(res.json()); return res.json(); } );
  }

}
