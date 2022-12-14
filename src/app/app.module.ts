import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PrimaryModule } from 'src/Modules/primary/primary.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { DemoComponent } from './demo/demo.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseHomeComponent,
    CounterComponent,
    DemoComponent,
    FetchDataComponent,
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
  //  RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    PrimaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
