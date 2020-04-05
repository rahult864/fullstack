import { TestBed } from '@angular/core/testing';

import { HttpbasicAuthinterceptorService } from './httpbasic-authinterceptor.service';

describe('HttpbasicAuthinterceptorService', () => {
  let service: HttpbasicAuthinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpbasicAuthinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
