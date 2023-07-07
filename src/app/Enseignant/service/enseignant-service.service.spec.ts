import { TestBed } from '@angular/core/testing';

import { EnseignantServiceService } from './enseignant-service.service';

describe('EnseignantServiceService', () => {
  let service: EnseignantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
