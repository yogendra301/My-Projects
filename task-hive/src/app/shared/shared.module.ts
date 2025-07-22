import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotAuthorisedComponent } from './components/not-authorised/not-authorised.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';


@NgModule({
  declarations: [
    NotAuthorisedComponent,
    PagenotfoundComponent,
    DashboardCardComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
  ,exports:[
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule ,
    NotAuthorisedComponent,
    PagenotfoundComponent,
    DashboardCardComponent,
    AdminHeaderComponent
  ]
})
export class SharedModule { }
