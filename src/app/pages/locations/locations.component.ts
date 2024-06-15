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

  public locations: string[] = [
    'Lingmere Fishery',
    'Larton Fishery',
    'Claremont Farm',
  ];
}
