import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyDataService } from '../../../../Service/dummy-data-service/dummy-data.service';
import { Observable, of } from 'rxjs';
import { IDeactivateComponent } from '../../../../Contracts/ideactivate-component';
import { AppUtil } from '../../../../appUtils/appConstant/AppUtility';
import { IAuthor } from '../../../../Domains/DbModel/IAuthor';
import { ICourse } from '../../../../Domains/DbModel/ICourse';
import { CommonService } from '../../../../Service/common-service/common.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, IDeactivateComponent {

  SelectedMenu: string = 'Select Author';

  _Course: ICourse = {
    Id: 0,
    AuthorId: 0,
    Description: '',
    FullPrice: 0,
    Name: '',
    Author: { Id: 0, Name: '' }
  };
  _AuthorList: IAuthor[] = [];
  constructor
    (
      private _commonS: CommonService,
      private _http: HttpClient,
      private _router: Router,
      private _dummyS: DummyDataService
    ) {
  }
  canDeactivateGuard(): Observable<boolean> {
    return of(false);
  }

  ngOnInit(): void {
     this.GetAllAuthorList();
  }

  GetAllAuthorList() {

    this._dummyS.AuthorList().subscribe(
      {
        next: (row) => { this._AuthorList.push(row); }
      }
    );
    // this._commonS.GetAuthorList().subscribe(result => {
    //   this._AuthorList = result;
    // });
  }
  SelectedAuthor(author: IAuthor) {
    this._Course.AuthorId = author.Id;
    this._Course.Author.Id = author.Id;
    this._Course.Author.Name = author.Name;
    this.SelectedMenu = author.Name;
  }
  AddCourse(event: any): void {
    this._dummyS.CreateCourse(this._Course)
      .subscribe(
        result => {
          this._router.navigate(['/common-data-lazy/list']);
        });

    // this._http.post<ICourse>(AppUtil.BASE_URL + AppUtil.CreateCourse_Api, this._Course)
    //   .subscribe(
    //     result => {
    //       this._router.navigate(['/common-data-lazy/list']);
    //     });
  }







}
