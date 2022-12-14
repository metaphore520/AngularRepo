import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private element: ElementRef,
    private renderer: Renderer2) {
    //this.changeColor('red');
  }

  @HostBinding("style.color") stColor: string = 'red';
  @HostListener("click") foo() {
    this.stColor = 'green';
  } 
  changeColor(color: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', color);
  } 




}
