import { TestBed } from '@angular/core/testing';

import { AppUrlServiceService } from './app-url-service.service';

describe('AppUrlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppUrlServiceService = TestBed.get(AppUrlServiceService);
    expect(service).toBeTruthy();
  });
});
