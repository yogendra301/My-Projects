import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
       path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
      },
      {
      path:'dashboard',
      component:AdminDashboardComponent
    },
     {
      path:'tasks',
      loadChildren:()=>import('../task/task.module').then(m=>m.TaskModule)
    },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
