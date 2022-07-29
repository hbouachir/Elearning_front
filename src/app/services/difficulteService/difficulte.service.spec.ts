import { TestBed } from '@angular/core/testing';

import { DifficulteService } from './difficulte.service';

describe('DifficulteService', () => {
  let service: DifficulteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DifficulteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
