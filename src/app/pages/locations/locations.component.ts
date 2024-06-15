import { Component } from '@angular/core';
import { LocationCardComponent } from './location-card/location-card.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [LocationCardComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  public locations: {name: string, lat: string, long:string}[] = [
    { name: 'Lingmere Fishery', lat: '53.41083228882654', long: '-3.1259834102978545' },
    { name: 'Larton Fishery', lat: '53.374738343707016', long: '-3.144247219954584' },
    { name: 'Claremont Farm', lat: '53.33396825266775', long: '-3.0144821131723125' },
  ];
}
