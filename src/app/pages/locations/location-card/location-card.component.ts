import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faFish, faTemperatureThreeQuarters, faWind } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss'
})
export class LocationCardComponent implements OnInit{
  @Input() public location!: {name: string, lat: string, long: string};
  public weather!: {temp: string, wind: string};
  public faTemperatureThreeQuarters = faTemperatureThreeQuarters;
  public faWind = faWind;
  public faFish = faFish;
  public showWeather: boolean = false;

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.http.get<any>(`https://api.open-meteo.com/v1/forecast?latitude=${this.location.lat}&longitude=${this.location.long}&current=temperature_2m,wind_speed_10m&wind_speed_unit=mph&forecast_days=1`).subscribe(response => {
      this.weather = {temp: response.current.temperature_2m ,wind: response.current.wind_speed_10m};
      this.showWeather = true;
    });
  }
}
