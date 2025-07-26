import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskOverviewComponent } from './components/task-overview/task-overview.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddeditTaskComponent } from './components/addedit-task/addedit-task.component';
import { AddStatusComponent } from './components/add-status/add-status.component';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskOverviewComponent,
    AddeditTaskComponent,
    AddStatusComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
