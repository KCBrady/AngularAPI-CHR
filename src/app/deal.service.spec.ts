import { TestBed } from '@angular/core/testing';

import { DealService } from './services/deal.service';

describe('DealService', () => {
  let service: DealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
