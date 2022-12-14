import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtil } from '../../../../appUtils/appConstant/AppUtility';
import { ICourse } from '../../../../Domains/DbModel/ICourse';
import { BaseService } from '../../../../Service/base-service/base.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  _courseList: ICourse[] = [];

  datasource: Array<object> = [
    { value: 'A Item 1', value2: "New Value 1" },
    { value: 'B Item 2', value2: "New Value 2" },
    { value: 'C Item 3', value2: "New Value 3" },
    { value: 'D Item 4', value2: "New Value 4" },
    { value: 'E Item 5', value2: "New Value 5" },
    { value: 'F Item 6', value2: "New Value 6" }
  ];

  DDMenuClicked(menu : any): void {
    console.log(menu);
  }


  number: Array<number> = [1, 2, 3, 4,5];
  constructor(
    private _http: HttpClient,
    private _baseService: BaseService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.GetAllCourseList();
  }
  GetAllCourseList(): void {
    this._http.get<ICourse[]>(AppUtil.BASE_URL + AppUtil.GetCourseList_Api).subscribe(result => {
      console.log(result);
      this._courseList = result;
      console.log(result);
    }, error => console.error(error));
  }



  Edit(course: ICourse): void {
    this._baseService.sendData(course);
    this._router.navigate(['common-data-lazy/edit'])
    //this._router.navigate(['common-data/edit', author.Id, author.Name], { queryParams: { param_author: JSON.stringify(author) } });
    // alert(this._router.url);
  }


  Delete(course: ICourse): void {
    this._http.post<ICourse>(AppUtil.BASE_URL + AppUtil.DeleteCourse_Api, course)
      .subscribe(result => {
        /// this._router.navigate(['/common-data/list']);
        this.GetAllCourseList();
      });
  }
}
