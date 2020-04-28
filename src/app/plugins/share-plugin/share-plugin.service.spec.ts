import { TestBed } from '@angular/core/testing';

import { SharePluginService } from './share-plugin.service';

describe('SharePluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharePluginService = TestBed.get(SharePluginService);
    expect(service).toBeTruthy();
  });
});
