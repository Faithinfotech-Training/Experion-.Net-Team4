import { TestBed } from '@angular/core/testing';

import { LabTechnitianService } from './lab-technitian.service';

describe('LabTechnitianService', () => {
  let service: LabTechnitianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabTechnitianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
