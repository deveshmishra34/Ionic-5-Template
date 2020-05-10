import { TestBed } from '@angular/core/testing';

import { AppPluginService } from './app-plugin.service';

describe('AppPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppPluginService = TestBed.get(AppPluginService);
    expect(service).toBeTruthy();
  });
});
