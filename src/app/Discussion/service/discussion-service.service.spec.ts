import { TestBed } from '@angular/core/testing';

import { DiscussionServiceService } from './discussion-service.service';

describe('DiscussionServiceService', () => {
  let service: DiscussionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscussionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
