import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpInterceptorHandler implements HttpHandler {

    constructor(private next: HttpHandler,
        private interceptor: HttpInterceptor) {

    }
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        return this.interceptor.intercept(req, this.next);
    }
}
