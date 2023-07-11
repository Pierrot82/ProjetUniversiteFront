import { TestBed } from '@angular/core/testing';

import { PersonneServiceService } from './personne-service.service';

describe('PersonneServiceService', () => {
  let service: PersonneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
