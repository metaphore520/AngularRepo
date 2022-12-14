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
import { Banner1Component } from './Component/banner1/banner1.component';
import { Banner2Component } from './Component/banner2/banner2.component';
import { InterceptorComponent } from './Component/interceptor/interceptor.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    IndexComponent,
    DropdownFComponent,
    DropdownHComponent,
    Banner1Component,
    Banner2Component,
    InterceptorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LazyFeatureRoutingModule
  ]
})
export class LazyFeatureModule { }
