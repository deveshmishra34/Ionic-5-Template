import { TestBed } from '@angular/core/testing';

import { ShowErrorService } from './show-error.service';

describe('ShowErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowErrorService = TestBed.get(ShowErrorService);
    expect(service).toBeTruthy();
  });
});
