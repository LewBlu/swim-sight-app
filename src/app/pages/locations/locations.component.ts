import { Component, OnInit } from '@angular/core';
import { LocationCardComponent } from './location-card/location-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [LocationCardComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements OnInit {
  public locations: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('api/location').subscribe(locations => {
      this.locations = locations;
    });
  }
}
