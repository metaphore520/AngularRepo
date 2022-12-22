import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../Service/common-service/common.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private _commonS: CommonService) {


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Can Activate Guard Access');
      return this._commonS.GetPermission();
  }

}
