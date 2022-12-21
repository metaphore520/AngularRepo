/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ResponseCacheInterceptor } from './response-cache.interceptor';
import { HeaderModifyInterceptor } from './header-modify.interceptor';
/** Http interceptor providers in outside-in order */
export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ResponseCacheInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HeaderModifyInterceptor, multi: true }
];