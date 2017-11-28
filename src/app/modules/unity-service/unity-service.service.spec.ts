import { TestBed, inject } from '@angular/core/testing';

import { UnityService } from './unity-service.service';

describe('UnityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnityService]
    });
  });

  it('should be created', inject([UnityService], (service: UnityService) => {
    expect(service).toBeTruthy();
  }));
});
