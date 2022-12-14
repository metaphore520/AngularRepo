import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUtil } from '../../../../appUtils/appConstant/AppUtility';
import { IAuthor } from '../../../../Domains/DbModel/IAuthor';
import { ICourse } from '../../../../Domains/DbModel/ICourse';
import { CommonService } from '../../../../Service/common-service/common.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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
      private _router: Router
    ) {
  }

  ngOnInit(): void {
    this.GetAllAuthorList();
  }

  GetAllAuthorList() {
    this._commonS.GetAuthorList().subscribe(result => {
      this._AuthorList = result;
    });
  }
  SelectedAuthor(author: IAuthor) {
    this._Course.AuthorId = author.Id;
    this.SelectedMenu = author.Name;
  }
  AddCourse(event: any): void {
    this._http.post<ICourse>(AppUtil.BASE_URL + AppUtil.CreateCourse_Api, this._Course)
      .subscribe(
        result => {
          this._router.navigate(['/common-data-lazy/list']);
        });
  }







}
