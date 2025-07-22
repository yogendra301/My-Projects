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

  selectTask(task:any)
  {
    this.router.navigate([task.id,'overview'], { relativeTo: this.route });
  }
}
