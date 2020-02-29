import { TestBed } from '@angular/core/testing';

import { HardcoredAuthentificationService } from './hardcored-authentification.service';

describe('HardcoredAuthentificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcoredAuthentificationService = TestBed.get(HardcoredAuthentificationService);
    expect(service).toBeTruthy();
  });
});
