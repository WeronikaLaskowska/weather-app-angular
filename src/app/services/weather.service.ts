import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface WeatherResponse {
  current: {
    feelslike_c: number;
    cloud: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
  location: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    return this.http.get<WeatherResponse>(
      'http://api.weatherapi.com/v1/current.json',
      {
        params: new HttpParams()
          .set('q', cityName)
          .set('key', 'b9767e4659854530804181039241905'),
      }
    );
  }
}
