import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUtil } from '../../../../appUtils/appConstant/AppUtility';
import { IAuthor } from '../../../../Domains/DbModel/IAuthor';
import { BaseService } from '../../../../Service/base-service/base.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  _authorList: IAuthor[] = [];
  _baseUrl: string = "";


  constructor(

    public _baseService: BaseService,
 
    public _http: HttpClient,
    public _router: Router
  ) {



  }

  //public displayedColumns = ['Id', 'Name'];
  //public dataSource8: Author[] = [
  //  { Id: 1, Name: 'Rahat' },
  //  {Id : 2,Name : 'Has'}
  //];

  ngOnInit(): void {
    this.GetAllAuthorList();
  }

  //GetAllAuthorList2(): Author[] {
  //  return this._baseService.get(AppUtil.GetAuthorList_Api)
  //    .subscribe((authors: Author[]) => {
  //      this._authorList = authors;
  //      //this.dataSource = this._authorList;
  //    }

  //  );
  //}


  GetAllAuthorList(): void {
    this._http.get<IAuthor[]>(AppUtil.BASE_URL + AppUtil.GetAuthorList_Api).subscribe(result => {
      this._authorList = result;
      console.log(result);
    }, error => console.error(error));
  }



  Edit(author: IAuthor): void {
    this._baseService.sendData(author);
    this._router.navigate(['common-data/edit', author.Id, author.Name])
    //this._router.navigate(['common-data/edit', author.Id, author.Name], { queryParams: { param_author: JSON.stringify(author) } });
    // alert(this._router.url);
  }


  Delete(author: IAuthor): void {
    this._http.post<IAuthor>(AppUtil.BASE_URL + AppUtil.DeleteAuthor_Api, author)
      .subscribe(result => {
       /// this._router.navigate(['/common-data/list']);
        this.GetAllAuthorList();
      });
  }






















}
