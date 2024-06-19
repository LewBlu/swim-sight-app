import { ResolveFn } from '@angular/router';
import { LocationsService } from '../services/locations.service';
import { inject } from '@angular/core';

export const locationsResolver: ResolveFn<boolean> = (route, state) => {
  const locationService = inject(LocationsService);
  if(locationService.locations.value.length) {
    return true;
  }
  return locationService.fetchLocations();
};
