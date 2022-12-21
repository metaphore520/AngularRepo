import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AppUtil } from '../../appUtils/appConstant/AppUtility';
import { IAuthor } from '../../Domains/DbModel/IAuthor';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private _http: HttpClient) {
  }
  GetAuthorList() {
    return this._http.get<IAuthor[]>(AppUtil.BASE_URL + AppUtil.GetAuthorList_Api);
  }
  GetPermission(): Observable<boolean> {
    return of(true)
      .pipe(
        delay(1000)
      );
  }
  GetPermissionF(): Observable<boolean> {
    return of(false)
      .pipe(
        delay(1000)
      );
  }

}
