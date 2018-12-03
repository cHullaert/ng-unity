import { TestBed } from '@angular/core/testing';

import { UnityService } from './unity.service';

describe('UnityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnityService = TestBed.get(UnityService);
    expect(service).toBeTruthy();
  });
});
