import { TestBed } from '@angular/core/testing';

import { OffersCreditService } from './offers-credit.service';

describe('OffersCreditService', () => {
  let service: OffersCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
