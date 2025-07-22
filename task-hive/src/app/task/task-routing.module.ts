import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { TaskOverviewComponent } from './components/task-overview/task-overview.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id/overview',
        component: TaskOverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
