import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather() {
    return this.httpClient.get("http://api.weatherstack.com/current?access_key=692a1323fa265dc4797ac61f804326c9&query=New%20York")
  }
}
