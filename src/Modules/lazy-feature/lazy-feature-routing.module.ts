import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateChildGuard } from '../../RouteGuard/activate-child.guard';
import { ActivateGuard } from '../../RouteGuard/activate.guard';
import { DactivateGuard } from '../../RouteGuard/dactivate.guard';
import { EditCourseResolver } from '../../Resolvers/edit-course.resolver';
import { CreateComponent } from './Component/create/create.component';
import { EditComponent } from './Component/edit/edit.component';
import { IndexComponent } from './Component/index/index.component';
import { InterceptorComponent } from './Component/interceptor/interceptor.component';
import { ListComponent } from './Component/list/list.component';
import { PageNotFoundComponent } from 'src/Component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate : [ActivateGuard],
    canActivateChild : [ActivateChildGuard],
    children: [
      {
        path: '',
        component: ListComponent,
        canActivate : [ActivateGuard],
      },
      {
        path: 'list',
        component: ListComponent,
        canActivate : [ActivateGuard],
      },
      {
        path: 'interceptor-test',
        component: InterceptorComponent
      },
      {
        path: 'create',
        component: CreateComponent,
        canDeactivate : [DactivateGuard]
      },
      {
        path: "edit",
        component: EditComponent,
        resolve: {
          authorList: EditCourseResolver
        },
        canDeactivate : [DactivateGuard]
      },
      {
        path : '**',
        component : PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFeatureRoutingModule { }
