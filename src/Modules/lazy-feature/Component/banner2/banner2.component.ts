import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component implements OnInit {

  @Input() title : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
