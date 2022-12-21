import { TestBed } from '@angular/core/testing';

import { ResponseCacheInterceptor } from './response-cache.interceptor';

describe('ResponseCacheInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResponseCacheInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResponseCacheInterceptor = TestBed.inject(ResponseCacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
