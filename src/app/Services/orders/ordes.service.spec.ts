import { TestBed } from '@angular/core/testing';

import { OrdesService } from './ordes.service';

describe('OrdesService', () => {
  let service: OrdesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
