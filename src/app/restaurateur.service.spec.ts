import { TestBed } from '@angular/core/testing';

import { RestaurateurService } from './restaurateur.service';

describe('RestaurateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurateurService = TestBed.get(RestaurateurService);
    expect(service).toBeTruthy();
  });
});
