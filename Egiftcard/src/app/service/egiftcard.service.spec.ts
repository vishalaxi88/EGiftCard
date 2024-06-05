import { TestBed } from '@angular/core/testing';

import { EgiftcardService } from './egiftcard.service';

describe('EgiftcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EgiftcardService = TestBed.get(EgiftcardService);
    expect(service).toBeTruthy();
  });
});
