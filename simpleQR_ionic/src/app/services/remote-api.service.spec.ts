import { TestBed } from '@angular/core/testing';

import { RemoteAPIService } from './remote-api.service';

describe('RemoteAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteAPIService = TestBed.get(RemoteAPIService);
    expect(service).toBeTruthy();
  });
});
