import { TestBed } from '@angular/core/testing';

import { CoursServiceService } from './cours-service.service';

describe('CoursServiceService', () => {
  let service: CoursServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
