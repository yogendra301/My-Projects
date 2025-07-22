import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/guards/role.guard';
import { NotAuthorisedComponent } from './shared/components/not-authorised/not-authorised.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
      path:'',
      redirectTo:'login',
      pathMatch:'full'
    },
    {
      path:'login',
      loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
    },
    {
      path:'admin',
      loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
      canActivate:[RoleGuard],
      data:{role:'admin'}
    },
    {
      path:'developer',
      loadChildren:()=>import('./developer/developer.module').then(m=>m.DeveloperModule),
       canActivate:[RoleGuard],
       data:{role:'developer'}
    },
     {
      path:'tasks',
      loadChildren:()=>import('./task/task.module').then(m=>m.TaskModule),
       canActivate:[RoleGuard],
       data:{role:'developer'}
    },
    {
      path : 'unauthorized',
      component: NotAuthorisedComponent
    },
    {
      path:'**',
      component:PagenotfoundComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
