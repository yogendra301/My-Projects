import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperComponent } from './developer.component';
import { DeveloperDashboardComponent } from './developer-dashboard/developer-dashboard.component';


@NgModule({
  declarations: [
    DeveloperComponent,
    DeveloperDashboardComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ]
})
export class DeveloperModule { }
