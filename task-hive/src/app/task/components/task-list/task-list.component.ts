import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList:any=[]
  searchTask:string='';
  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute)
  {

  }

  ngOnInit()
  {
      this.api.getTaskList().subscribe((res:any)=>{
        if(res && res.length>0)
        {
          this.taskList=res;
        }
      })
  }

  searchTaskFn()
  {
    this.api.getTaskList().subscribe((res:any)=>{
      if(res)
      {
        let filteredTask = res.filter((res:any)=>res.title.includes(this.searchTask)) 
        this.taskList= filteredTask;
        debugger;
      }
    })
  }

  selectTask(task:any)
  {
    this.router.navigate([task.id,'overview'], { relativeTo: this.route });
  }
}
