import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from '../../Pipes/testPipe/test.pipe';
import { TestDirective } from '../../Directives/test/test.directive';
import { LoopdDirective } from '../../Directives/loopStructurual/loopd.directive';
import { DropdownCComponent } from './dropdown-c/dropdown-c.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TestPipe,
    TestDirective,
    LoopdDirective,
    DropdownCComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TestPipe,
    TestDirective,
    LoopdDirective,
    DropdownCComponent
  ]
})
export class SharedModule { }
