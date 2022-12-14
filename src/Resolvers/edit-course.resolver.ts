import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IAuthor } from '../Domains/DbModel/IAuthor';
import { CommonService } from '../Service/common-service/common.service';


@Injectable({
  providedIn: 'root'
})
export class EditCourseResolver implements Resolve<IAuthor[]> {

  constructor(private _commonS: CommonService) {


  }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<IAuthor[]> {
    //return of(true);
    return this._commonS.GetAuthorList()
  }
}
