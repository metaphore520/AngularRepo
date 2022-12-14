import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from '../../app/demo/demo.component';
import { CreateComponent } from './Component/create/create.component';
import { EditComponent } from './Component/edit/edit.component';
import { ListComponent } from './Component/list/list.component';

const routes: Routes = [
  {
    path: "common-data",
    component: DemoComponent,
    children: [
      {
        path: "create",
        component: CreateComponent
      },
      {
        path: "edit/:id/:name",
        component: EditComponent
      },
      {
        path: "list",
        component: ListComponent
      },
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryRoutingModule {






}
