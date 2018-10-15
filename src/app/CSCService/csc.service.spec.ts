import { TestBed } from '@angular/core/testing';

import { CSCService } from './csc.service';

describe('CSCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CSCService = TestBed.get(CSCService);
    expect(service).toBeTruthy();
  });
});
