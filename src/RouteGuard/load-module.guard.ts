import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../Service/common-service/common.service';

@Injectable({
  providedIn: 'root'
})
export class LoadModuleGuard implements CanLoad {
  constructor(private _commonS: CommonService) {


  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   //debugger;
      return this._commonS.GetPermission();
  }
}
