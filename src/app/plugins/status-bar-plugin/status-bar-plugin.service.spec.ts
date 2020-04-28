import { TestBed } from '@angular/core/testing';

import { StatusBarPluginService } from './status-bar-plugin.service';

describe('StatusBarPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusBarPluginService = TestBed.get(StatusBarPluginService);
    expect(service).toBeTruthy();
  });
});
