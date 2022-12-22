import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, Subscription,Observable, of  } from 'rxjs';
import { DummyDataService } from  '../../../../Service/dummy-data-service/dummy-data.service';
import { IDeactivateComponent } from '../../../../Contracts/ideactivate-component';
import { AppUtil } from '../../../../appUtils/appConstant/AppUtility';
import { IAuthor } from '../../../../Domains/DbModel/IAuthor';
import { ICourse } from '../../../../Domains/DbModel/ICourse';
import { BaseService } from '../../../../Service/base-service/base.service';
import { CommonService } from '../../../../Service/common-service/common.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, IDeactivateComponent {


  SelectedMenu: string = "Select Author";
  _AuthorList: IAuthor[] = [];
  _Course: ICourse = {
    Author: { Id: 0, Name: '' },
    AuthorId: 0,
    Description: '',
    FullPrice: 0,
    Id: 0,
    Name: ''
  }
  __Course: any;
  _subscription: Subscription = new Subscription();
  constructor
    (
      private _commonS: CommonService,
      private _baseS: BaseService,
      private _http: HttpClient,
      private _router: Router,
      private _activatedRoute: ActivatedRoute,
      private _dummyS: DummyDataService
    ) { }
  canDeactivateGuard(): Observable<boolean> {
    console.log('De Activate EditComponent  D');
    return of(false);
  }

  ngOnInit(): void {
    this.GetAllAuthorList();
    console.log('Data................................');
    this._subscription = this._baseS.dataComm.pipe(delay(6000)).subscribe(
      data => {
        this._Course = data as ICourse;
        this.SelectedAuthor(this._AuthorList.find(s => s.Id == this._Course.AuthorId) as IAuthor);
        //this.SelectedMenu = this._AuthorList.find(s => s.Id == this._Course.AuthorId)?.Name as string;
        //alert(this.SelectedMenu);
      }
    );
  }
  EditCourse(event: any): void {
    this._dummyS.EditCourse(this._Course)
      .subscribe(result => {
        this._router.navigate(['/common-data-lazy/list']);
      });
    // this._http.post<ICourse>(AppUtil.BASE_URL + AppUtil.EditCourse_Api, this._Course)
  }

  GetAllAuthorList() {
    // this._activatedRoute.data.subscribe(({ authorList }) => {
    //   // do something with your resolved data ...
    //   this._AuthorList = authorList;
    // })
      this._AuthorList = [];
      this._dummyS.AuthorList()
      .subscribe({
        next: (row) => { this._AuthorList.push(row); }
      }); 
  }
  SelectedAuthor(author: IAuthor) {
    this._Course.AuthorId = author.Id;
    this._Course.Author.Id = author.Id;
    this._Course.Author.Name = author.Name;
    this.SelectedMenu = author.Name;
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }






}
