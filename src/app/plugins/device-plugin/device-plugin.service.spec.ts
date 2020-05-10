import { TestBed } from '@angular/core/testing';

import { DevicePluginService } from './device-plugin.service';

describe('DevicePluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevicePluginService = TestBed.get(DevicePluginService);
    expect(service).toBeTruthy();
  });
});
