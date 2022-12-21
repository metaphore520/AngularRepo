import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  read: number;
}
const maxAge = 30000;

export abstract class RequestCache {
  abstract get(request: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(request: HttpRequest<any>, response: HttpResponse<any>): void;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService implements RequestCache {


  map = new Map<string, RequestCacheEntry>();
  constructor() { }
  get(request: HttpRequest<any>): HttpResponse<any> | undefined {
    let url = request.urlWithParams;
    let cached = this.map.get(url);

    if (!cached) {
      return undefined;
    }
    return cached.response;
  }
  put(request: HttpRequest<any>, response: HttpResponse<any>): void {
    let url_temp = request.urlWithParams;
    let newEntry = { url: url_temp, response: response, read: Date.now() }
    this.map.set(url_temp, newEntry as RequestCacheEntry);
    this.map.forEach((cacheEntry) => {
      if (Date.now() - cacheEntry.read > maxAge) {
        this.map.delete(cacheEntry.url)
      }
    });
  }
}
