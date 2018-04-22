import { CelsiusPipe } from './celsius.pipe';
import { TimePipe } from './time.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    CelsiusPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
