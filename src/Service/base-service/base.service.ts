import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nextTick } from 'process';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {


  public dataComm = new BehaviorSubject({})

  constructor(
    private http: HttpClient
  ) {

  }
  public sendData(myobj: any): void{
    this.dataComm.next(myobj);
  }


  //public get<T>(url: string): Observable<T> {
  //  return this.http.get<T>(url);
  //}
  //public set<T>(url: string, body : T): Observable<T> {
  //  return this.http.post<T>(url,body);
  //}
  public set(url: string, body: any): any {
    return this.http.post(url, body);
  }

  public get(url: string): any {
    return this.http.get(url);
  }
}
