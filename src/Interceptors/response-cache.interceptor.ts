import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, startWith, tap, of } from 'rxjs';
import { CacheService } from 'src/Service/cache-service/cache.service';

@Injectable()
export class ResponseCacheInterceptor implements HttpInterceptor {
  constructor(private cache: CacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // continue if not cacheable.
    if (!isCacheable(req)) { return next.handle(req); }

    const cachedResponse = this.cache.get(req);

    // cache-then-refresh
    if (req.headers.get('x-refresh')) {
      console.log(' x-refresh true --- Response '); 
      const results$ = sendRequest(req, next, this.cache);

      return cachedResponse ?
        results$.pipe(startWith(cachedResponse)) : results$;

    }
    // cache-or-fetch
    cachedResponse ? console.log('Cached Response ') : console.log('Remote Response');
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}


/** Is this request cacheable? */
function isCacheable(req: HttpRequest<any>) {
  // Only GET requests are cacheable
  return req.method === 'GET';
  // Only npm package search is cacheable in this app
  //-1 < req.url.indexOf(searchUrl);
}

/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: CacheService): Observable<HttpEvent<any>> {
  return next.handle(req).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // Update the cache.
      }

    })
  );
}
