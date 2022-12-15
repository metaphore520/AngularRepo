import { Component, Input, OnInit, Output, EventEmitter, ContentChildren, ContentChild, AfterContentInit, Type, TemplateRef, ViewChild } from '@angular/core';
import { Observable, pipe, of, debounceTime, Subject, timer } from 'rxjs'
import { Banner1Component } from 'src/Modules/lazy-feature/Component/banner1/banner1.component';
import { Banner2Component } from 'src/Modules/lazy-feature/Component/banner2/banner2.component';
import { DropdownFComponent } from '../../lazy-feature/Component/dropdown-f/dropdown-f.component';
import { DropdownHComponent } from '../../lazy-feature/Component/dropdown-h/dropdown-h.component';
import { DyCompDirective } from '../directives/dy-comp.directive';

export interface AdComponent {
  title: string;
}

interface Components {
  data: string;
  comp: Type<any>;
}
@Component({
  selector: 'app-dropdown-c',
  templateUrl: './dropdown-c.component.html',
  styleUrls: ['./dropdown-c.component.css']
})
export class DropdownCComponent implements OnInit, AfterContentInit {

  @Input() data: Array<any> = [];
  @Output() menuClick = new EventEmitter();
  @ContentChild(DropdownFComponent) ddFooter!: DropdownFComponent;
  @ContentChild(DropdownHComponent) ddHeader!: DropdownHComponent;
  @ViewChild(DyCompDirective)  anchorElement!: DyCompDirective;

  comps: Components[] = [
    {
      comp: Banner1Component,
      data: "aaaaaaaaaa"
    },
    {
      comp: Banner2Component,
      data: "vvvvvvvvvvv"
    }
  ];

  hideMenu: boolean = true;
  $searchText: Subject<string> = new Subject<string>();
  searchText: string = "Search Things............";
  menuClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.$searchText
      .pipe(debounceTime(2000))
      .subscribe(
        data => 
        {
          console.log(data);
          this.loadComponent(data,Math.floor(Math.random() * 100) % 2); 
        }
        
        );
  }
  ngAfterContentInit() {
    // contentChild is set
    console.log(this.ddHeader);
    console.log(this.ddFooter);

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
  loadComponent(data: string, index : number): void {
    let componentRef = this.anchorElement.viewContainer;
    componentRef.clear();
    let compNew = componentRef.createComponent<AdComponent>(this.comps[index].comp);
    compNew.instance.title = data;
  }
}
