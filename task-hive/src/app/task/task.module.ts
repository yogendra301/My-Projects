import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskOverviewComponent } from './components/task-overview/task-overview.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddeditTaskComponent } from './components/addedit-task/addedit-task.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskOverviewComponent,
    AddeditTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class TaskModule { }
