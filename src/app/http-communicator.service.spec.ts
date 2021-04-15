import { TestBed } from '@angular/core/testing';

import { HttpCommunicatorService } from './http-communicator.service';

describe('HttpCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCommunicatorService = TestBed.get(HttpCommunicatorService);
    expect(service).toBeTruthy();
  });
});
