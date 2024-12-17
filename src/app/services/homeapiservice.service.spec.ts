import { TestBed } from '@angular/core/testing';

import { HomeapiserviceService } from './homeapiservice.service';

describe('HomeapiserviceService', () => {
  let service: HomeapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
