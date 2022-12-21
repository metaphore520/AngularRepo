import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class HeaderModifyInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let modified = request.clone({ setHeaders: { 'myOwnHeader': 'NewValue' } });
    modified = modified.clone({ setHeaders: { 'Authorization': 'NewValue' } });
    modified = modified.clone({ setParams: { 'x-refresh': 'true' } });
    console.log("Request-----------");
    console.log(modified);
    return next.handle(modified)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse<any>) {
            console.log(event);
          }
          else if (event instanceof HttpErrorResponse) {
            if (event.status == 403) {
              console.info(event.error);
            }
            else {
              console.info(event.error);
            }
          }
          else {
            console.log(event);
          }
          return event
        }),
      );
  }
}
