import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  locations = new BehaviorSubject<Location[]>([]);
  constructor(private http: HttpClient) {}

  // Retrieve a list of locations within the application
  public fetchLocations() {
    return this.http.get<Location[]>('api/location').pipe(
      map((locations: Location[]) => {
      this.locations.next(locations);
      return true;
    }));
  }

  // Fetch a location based on it's id
  public getIndividualLocation(id: number): Location
  {
    const selectedLocation = this.locations.value.filter((currentLocation: any) => currentLocation.id == id);
    return selectedLocation[0];
  }
}
