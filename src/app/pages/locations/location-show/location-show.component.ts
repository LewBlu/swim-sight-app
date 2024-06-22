import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../../shared/services/locations.service';
import { Location } from '../../../shared/models/location';
import { ActivatedRoute } from '@angular/router';
import { LakeCardComponent } from './lake-card/lake-card.component';

@Component({
  selector: 'app-location-show',
  standalone: true,
  imports: [LakeCardComponent],
  templateUrl: './location-show.component.html',
  styleUrl: './location-show.component.scss'
})
export class LocationShowComponent implements OnInit{
  public location!: Location;
  public locationId!: number;

  constructor(private locationService: LocationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')) {
      this.locationId = +this.route.snapshot.paramMap.get('id')!;
    }
    this.location = this.locationService.getIndividualLocation(this.locationId);
  }
}
