import { TestBed } from '@angular/core/testing';

import { RendrezvousService } from './rendrezvous.service';

describe('RendrezvousService', () => {
  let service: RendrezvousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendrezvousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
