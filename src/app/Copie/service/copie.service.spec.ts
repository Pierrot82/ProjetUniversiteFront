import { TestBed } from '@angular/core/testing';

import { CopieService } from './copie.service';

describe('CopieService', () => {
  let service: CopieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
