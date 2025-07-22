import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

// dashboardConfig:any=

dashboardCards:any=[]
totalTasks:number=0
totalUsers:number=0

constructor(private apiServ:ApiService)
{

}

getColumns(): number {
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 768) {
      return 1;
    } else {
      return 2;
    }
  }
  return 2;
}
ngOnInit()
{

  this.loadDashboardData();
 
}

loadDashboardData()
{
  forkJoin({
    tasks:this.apiServ.getTaskList(),
    users:this.apiServ.getUserList()
  }).subscribe((result:any)=>{
    this.totalTasks=result.tasks.length;
    this.totalUsers=result.users.length
     this.dashboardCards=[
    {title:'Total Users',desc:'total number of users on task-hive will be shown here',backgroundColor:'#f0eedaff',count:this.totalTasks },
      {title:'Total Tasks',desc:'total number of tasks on task-hive will be shown here',backgroundColor:'#a285a7ff',count:this.totalUsers}
      //  {title:'Total Users',desc:'total number of users on task-hive will be shown here',backgroundColor:'#f4f4f4'},
      // {title:'Total Tasks',desc:'total number of tasks on task-hive will be shown here',backgroundColor:'#f9f9f49'}
  ]
  })


  
}

}
