import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUtil } from '../../../../appUtils/appConstant/AppUtility';
import { IAuthor } from '../../../../Domains/DbModel/IAuthor';
import { BaseService } from '../../../../Service/base-service/base.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  //@Input() param_Author  : Author = new Author('');
  temp_author: string = '';

   _subscription: Subscription = new Subscription();

  public _Author: IAuthor;
  constructor(public _baseService: BaseService,
    public _http: HttpClient,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    this._Author = {
      Id: -1,
      Name : ''
    }
    
    //  this._Author = this._route.snapshot.paramMap.get('p_author');
    //  this._Author = this._route.snapshot.
    //  this._Author = JSON.parse(this._route.snapshot.paramMap.get('id'));


  }

  ngOnInit(): void {
    //alert(this._route.snapshot.paramMap.get('id') +
    //  ' +  ' +
    //  this._route.snapshot.paramMap.get('name') +
    //  ' + ' +
    //  this._route.snapshot.queryParamMap.get('param_author'));

    /*
    this.temp_author = this._route.snapshot.queryParamMap.get('param_author') as string;
    this._Author = JSON.parse(this.temp_author);
    alert(this._Author.Name);
    */

    this._subscription = this._baseService.dataComm.subscribe((data) => {
      this._Author = data as IAuthor;
      alert(this._Author.Name);
    });
  }

  EditAuthor(event: any): void {
    this._http.post<IAuthor>(AppUtil.BASE_URL + AppUtil.EditAuthor_Api, this._Author)
      .subscribe(result => {

        this._router.navigate(['/common-data/list']);
      });
  }



  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


}
