import { Injectable } from '@angular/core';
import { AppUtil } from '../../appUtils/appConstant/AppUtility';
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(public _baseService: BaseService) {

  }
  //public createAuthor(_author: Author) {
  //  this._baseService.set<Author>(AppUtil.BASE_URL + AppUtil.CreateAuthor, _author);
  //}
  //public editAuthor(_author: Author) {
  //  this._baseService.set<Author>(AppUtil.BASE_URL + AppUtil.EditAuthor, _author);
  //}
  //public listAuthor(_author: Author) {
  //  this._baseService.get<Author>(AppUtil.BASE_URL + AppUtil.ListAuthor);
  //}

  //public createAuthor(_author: Author) : any {
  //  this._baseService.set(AppUtil.BASE_URL + AppUtil.CreateAuthor, _author);
  //}
  //public editAuthor(_author: Author):any {
  //  this._baseService.set(AppUtil.BASE_URL + AppUtil.EditAuthor, _author);
  //}
  //public listAuthor(): any {
  //  this._baseService.get(AppUtil.BASE_URL + AppUtil.ListAuthor);
  //}

}
