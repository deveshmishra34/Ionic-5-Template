import { TestBed } from '@angular/core/testing';

import { PermissionPluginService } from './permission-plugin.service';

describe('PermissionPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermissionPluginService = TestBed.get(PermissionPluginService);
    expect(service).toBeTruthy();
  });
});
