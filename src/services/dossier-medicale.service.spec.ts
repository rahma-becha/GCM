import { TestBed } from '@angular/core/testing';

import { DossierMedicaleService } from './dossier-medicale.service';

describe('DossierMedicaleService', () => {
  let service: DossierMedicaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossierMedicaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
