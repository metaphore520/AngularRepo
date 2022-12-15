import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDyComp]'
})
export class DyCompDirective {

  constructor(public viewContainer : ViewContainerRef) { }

}
