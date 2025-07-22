import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskOverviewComponent } from './components/task-overview/task-overview.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskOverviewComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
