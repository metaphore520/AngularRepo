import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateChildGuard } from 'src/RouteGuard/activate-child.guard';
import { ActivateGuard } from 'src/RouteGuard/activate.guard';
import { DactivateGuard } from 'src/RouteGuard/dactivate.guard';
import { EditCourseResolver } from '../../Resolvers/edit-course.resolver';
import { CreateComponent } from './Component/create/create.component';
import { EditComponent } from './Component/edit/edit.component';
import { IndexComponent } from './Component/index/index.component';
import { InterceptorComponent } from './Component/interceptor/interceptor.component';
import { ListComponent } from './Component/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate : [ActivateGuard],
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'interceptor-test',
        component: InterceptorComponent
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivateChild : [ActivateChildGuard],
        canDeactivate : [DactivateGuard]
      },
      {
        path: "edit",
        component: EditComponent,
        resolve: {
          authorList: EditCourseResolver
        },
        canActivateChild : [ActivateChildGuard],
        canDeactivate : [DactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFeatureRoutingModule { }
