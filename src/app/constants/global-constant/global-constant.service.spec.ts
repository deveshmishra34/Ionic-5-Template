import { TestBed } from '@angular/core/testing';

import { GlobalConstantService } from './global-constant.service';

describe('GlobalConstantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalConstantService = TestBed.get(GlobalConstantService);
    expect(service).toBeTruthy();
  });
});
