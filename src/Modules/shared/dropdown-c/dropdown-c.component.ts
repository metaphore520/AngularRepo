import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, pipe, of, debounceTime, Subject, timer } from 'rxjs'

@Component({
  selector: 'app-dropdown-c',
  templateUrl: './dropdown-c.component.html',
  styleUrls: ['./dropdown-c.component.css']
})
export class DropdownCComponent implements OnInit {

  @Input() data: Array<any> = [];
  @Output() menuClick = new EventEmitter();
  hideMenu: boolean = true;
  $searchText: Subject<string> = new Subject<string>();
  searchText: string = "Search Things............";
  menuClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.$searchText
      .pipe(debounceTime(2000))
      .subscribe(data => console.log(data));
  }
  //DropdownClick(): void {
  //  this.hideMenu = this.hideMenu == true ? false : true;
  //}
  MenuClick(obj: any): void {
    alert("Menu Clicked");
    this.menuClick.emit(obj.value);
  }
  MenuMouseDown(obj: any): void {
    //alert("Menu Mouse Down");
    this.menuClick.emit(obj.value);
  }
 /*  https://stackoverflow.com/questions/18848738/click-event-not-triggered-after-focusout-event  */
  CloseMenu(): void {
    // alert(this.menuClicked);
    //this.menuClicked = false;
   // console.log(this.menuClicked); 
    this.hideMenu = true;
  }
  OpenMenu(): void {
    this.hideMenu = false;
  }
  OnSearchTextChange(): void {
    /// console.log(this.$searchText);
    //this.$searchText
    //  .pipe(debounceTime(2000))
    //  .subscribe(data => console.log(data));
    this.$searchText.next(this.searchText);
  }
}
