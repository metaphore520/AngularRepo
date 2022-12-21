import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanDeactivate,
  RouterStateSnapshot, UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from '../Contracts/ideactivate-component';
import { CommonService } from '../Service/common-service/common.service';

@Injectable({
  providedIn: 'root'
})
export class DactivateGuard implements CanDeactivate<IDeactivateComponent> {
  // let dactivateC = inject(DeactivateComponent);
  constructor(private _commonS: CommonService) {
  }

  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivateGuard();
  }

}
