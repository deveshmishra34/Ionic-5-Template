import { TestBed } from '@angular/core/testing';

import { StoragePluginService } from './storage-plugin.service';

describe('StoragePluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoragePluginService = TestBed.get(StoragePluginService);
    expect(service).toBeTruthy();
  });
});
