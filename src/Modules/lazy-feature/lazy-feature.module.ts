import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyFeatureRoutingModule } from './lazy-feature-routing.module';
import { CreateComponent } from './Component/create/create.component';
import { EditComponent } from './Component/edit/edit.component';
import { ListComponent } from './Component/list/list.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './Component/index/index.component';
import { SharedModule } from '../shared/shared.module';
import { DropdownFComponent } from './Component/dropdown-f/dropdown-f.component';
import { DropdownHComponent } from './Component/dropdown-h/dropdown-h.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    IndexComponent
    DropdownFComponent,
    DropdownHComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LazyFeatureRoutingModule
  ]
})
export class LazyFeatureModule { }
