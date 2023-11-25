import { TestBed } from '@angular/core/testing';

import { AlergieService } from './alergie.service';

describe('AlergieService', () => {
  let service: AlergieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlergieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
