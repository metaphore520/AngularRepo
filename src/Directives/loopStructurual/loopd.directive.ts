import {
  Directive, OnChanges, TemplateRef, ViewContainerRef,
  Input, SimpleChanges, OnInit
} from '@angular/core';

@Directive({
  selector: '[appLoopd]'
})
export class LoopdDirective implements OnInit, OnChanges {

  @Input() appLoopdOf: Array<any> = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef

  ) {

  }
  ngOnInit(): void {
    //this.viewContainer.createEmbeddedView(this.templateRef);
  }


  ngOnChanges(changes: SimpleChanges): void {

    // this.viewContainer.clear();
    for (var item of this.appLoopdOf) {
      this.viewContainer.createEmbeddedView
        (
          this.templateRef,
          {
            $implicit: item,

            indice: this.appLoopdOf.indexOf(item)
          }
        );
    }
  }







}
