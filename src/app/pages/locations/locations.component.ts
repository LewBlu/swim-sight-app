import { Component, OnInit } from '@angular/core';
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationsService } from '../../shared/services/locations.service';
import { Location } from '../../shared/models/location';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [LocationCardComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements OnInit {
  public locations!: Location[];

  constructor(private locationService: LocationsService) {}

  ngOnInit(): void {
    this.locationService.locations.subscribe((locations: Location[]) => {
      this.locations = locations;
    });
  }
}
