import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { TaskService } from '../../services/task.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddeditTaskComponent } from '../addedit-task/addedit-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  searchTask:string='';
  page = 1;
  pageSize = 10;
  isLoading = false;
  allLoaded = false;

  constructor(private api:ApiService,
    private router:Router,
    private route:ActivatedRoute,
    public taskServ:TaskService,
    private dialog:MatDialog,
    // private dialogRef:MatDialogRef<AddeditTaskComponent>
  )
  {

  }

  ngOnInit()
  {
    //  this.loadMoreTasks();

      this.api.getTaskList().subscribe((res:any)=>{
        if(res && res.length>0)
        {
          this.taskServ.$taskList.next(res);
        }
      })
  }

  loadMoreTasks() {
    if (this.isLoading || this.allLoaded) return;

    this.isLoading = true;

   this.api.getTaskList(this.page, this.pageSize).subscribe((newTasks:any) => {
      if (newTasks.length === 0) {
        this.allLoaded = true;
      } else {
       this.taskServ.$taskList.next(newTasks);
        this.page++;
      }
      this.isLoading = false;
    });
  }

  searchTaskFn()
  {
    this.api.getTaskList().subscribe((res:any)=>{
      if(res)
      {
        let filteredTask = res.filter((res:any)=>res.title.includes(this.searchTask)) 
       this.taskServ.$taskList.next(filteredTask);
      }
    })
  }

  selectTask(task:any)
  {
    this.router.navigate([task.id,'overview'], { relativeTo: this.route });
  }

  openAddTaskPopup()
  {
    this.taskServ.$isAddOrEdit.next(1);
    let dialogRef2 = this.dialog.open(AddeditTaskComponent,{
      width:'700px',
      autoFocus:false,
      disableClose:true
    })
  }
}
