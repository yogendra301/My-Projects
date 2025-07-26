import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddeditTaskComponent } from '../addedit-task/addedit-task.component';
import *  as moment from 'moment' 
@Component({
  selector: 'app-task-overview',
  templateUrl: './task-overview.component.html',
  styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {

// $selectedTask:Observable<any>;
selectedUserId:any
constructor(
    private route:ActivatedRoute,
    private router:Router,
    public taskServ:TaskService,
    private api:ApiService,
    private dialog:MatDialog
  )
  {
                              
  }
  
ngOnInit(): void {
this.route.paramMap.subscribe(params => {
  const id = params.get('id');

  this.api.getTaskList().subscribe((res:any)=>{
    if(res)
    {
      let filteredTask = res.filter((res:any)=>res.id==id) 
      this.taskServ.$selectedTask.next(filteredTask[0]?filteredTask[0]:{});
    }
  })
});

}

openEditTaskPopup()
{
  let dialogRef = this.dialog.open(AddeditTaskComponent,{
    width:'700px',
    autoFocus:false,
    disableClose:true,
    data:this.taskServ.$selectedTask.value
  });

  dialogRef.afterClosed().subscribe(result => {
    this.api.getTaskList().subscribe((res:any)=>{
      if(res)
      {
       this.taskServ.$taskList.next(res);
      }
    })
  })
}

}
