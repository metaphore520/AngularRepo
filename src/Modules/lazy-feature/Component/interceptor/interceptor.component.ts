import { HttpRequest, HttpXhrBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, Observable, takeWhile, tap } from 'rxjs';
import { HeaderModifyInterceptor } from '../../../../Interceptors/header-modify.interceptor';
import { ResponseCacheInterceptor } from  '../../../../Interceptors/response-cache.interceptor';
import { CacheService } from '../../../../Service/cache-service/cache.service';
import { HttpInterceptorHandler } from '../../../../Interceptors/Handler/http-interceptor-handler';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {
  response!: Observable<any>;
  urls: string[] = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/12',
    'https://jsonplaceholder.typicode.com/posts/14',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/12',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/14',
    'https://jsonplaceholder.typicode.com/posts/1',
  ]
  constructor(private backend: HttpXhrBackend,
    private cacheS: CacheService) {
  }
  ngOnInit(): void {
    interval(1000)
      .pipe(
        takeWhile(x => x < 8),
        tap(x => this.request(x))
      )
      .subscribe((data) => {
        console.log(data);
      })
  }
  // Backend --- IC1 --- IC2 --- 
  request(index: number) {
    const req = new HttpRequest('GET', this.urls[index]);
    const i1Handler = new HttpInterceptorHandler(this.backend, new HeaderModifyInterceptor());
    const i2Handler = new HttpInterceptorHandler(i1Handler, new ResponseCacheInterceptor(this.cacheS));
    this.response = i2Handler.handle(req);
  }
}
