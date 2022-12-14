import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { DemoComponent } from './demo/demo.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'common-data', component: DemoComponent },
  {
    path: 'common-data-lazy',
    component: CourseHomeComponent,
    loadChildren: () => import('../Modules/lazy-feature/lazy-feature.module').then(m => m.LazyFeatureModule)
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
