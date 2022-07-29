import { TestBed } from '@angular/core/testing';

import { SousChampService } from './sous-champ.service';

describe('SousChampService', () => {
  let service: SousChampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousChampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
