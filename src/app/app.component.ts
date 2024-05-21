import { Component, OnInit } from '@angular/core';
import { WeatherResponse, WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherData?: WeatherResponse;
  cityName?: string = 'Warsaw';
  ngOnInit(): void {
    this.getWeatherData(this.cityName ?? 'Warsaw');
    this.cityName = '';
  }
  onSubmit() {
    this.getWeatherData(this.cityName ?? 'Warsaw');
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
    });
  }
}
