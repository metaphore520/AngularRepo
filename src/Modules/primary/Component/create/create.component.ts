import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { AppUtil } from '../../../../appUtils/appConstant/AppUtility';
import { IAuthor } from '../../../../Domains/DbModel/IAuthor';
import { BaseService } from '../../../../Service/base-service/base.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public _Author: IAuthor;
  constructor(public _baseService: BaseService,
    public _http: HttpClient,
    private _router: Router) {
    this._Author = {
      Id: 0,
      Name: ''
    }
  }
  ngOnInit(): void {


  }
  //this._baseService.set(AppUtil.BASE_URL + AppUtil.CreateAuthor, this._Author);
  AddAuthor(event: any): void {
    this._http.post<IAuthor>(AppUtil.BASE_URL + AppUtil.CreateAuthor_Api, this._Author)
      .subscribe(
        result => {
          this._router.navigate(['/common-data/list']);
        });
  }
}
