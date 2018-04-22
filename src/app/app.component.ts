import { Weather } from './models/weather';
import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city = '';
  flag = 0;
  weatherDetail: Weather = new Weather();
  weatherDetailOld: Weather = new Weather();
 constructor(private weatherService: WeatherService) {
 }

 onSearch() {
  this.weatherService.getWeather(this.city).subscribe( res => {this.weatherDetail = res[0];
    this.flag = 1;
    if (res.indexOf(1)) {
      this.weatherDetailOld = res[1];
      this.flag = 2;
    }
    console.log(res); } );
 }

}
