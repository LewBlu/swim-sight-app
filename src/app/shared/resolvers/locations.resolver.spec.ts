import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { locationsResolver } from './locations.resolver';

describe('locationsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => locationsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
