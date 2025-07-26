import { Component, Inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Form, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddStatusComponent } from '../add-status/add-status.component';
import {task} from '../../../shared/models/task.interface'
@Component({
  selector: 'app-addedit-task',
  templateUrl: './addedit-task.component.html',
  styleUrls: ['./addedit-task.component.scss']
})
export class AddeditTaskComponent {

  projectList:any=[]
  userList:any=[]
  statusList:any[]=[]
  taskForm:any
  constructor(
    public taskServ:TaskService,
    private api:ApiService,
    private fb:FormBuilder,
    private toastr:ToastrService,
    private dialogRef:MatDialogRef<AddeditTaskComponent>,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any 
  )
  {

  }

  ngOnInit(): void {

    this.api.getStatuses().subscribe((res:any)=>{
      if(res)
      {
        this.statusList=res;
      }
    });
    this.taskForm = this.fb.group({
      id: [this.data?.id || null],
      title: [this.data?.title || ''],
      description: [this.data?.description || ''],
      projectId: [this.data?.projectId || ''],
      assignTo: [this.data?.assignTo || ''],
      // start_date: [this.data?.title || ''],
      // end_date: [this.data?.title || ''],
      status: [this.data?.status || '']
    })


    this.api.getProjectList().subscribe((res:any)=>{
      if(res)
      {
        this.projectList=res;
      }
    })

    this.api.getUserList().subscribe((res:any)=>{
      if(res)
      {
        this.userList=res;
      }
    })

  }

  addTask()
  {
    this.api.addTask(this.taskForm.value).subscribe((res:any)=>{
      if(res)
      {
        const currentList=this.taskServ.$taskList.value;
        const updatedTask = [...currentList, res];
        this.taskServ.$taskList.next(updatedTask);
        this.toastr.success('Task added successfully');
        this.taskForm.reset();
        this.dialogRef.close();
      }
    })
  }

  updateTask()
  {
    this.api.updateTask(this.taskForm.value).subscribe((res:any)=>{
      if(res)
      {
        const currentList=this.taskServ.$taskList.value;
        const updatedList = currentList.map((task: any) => 
          task.id === res.id ? res : task
        );
        this.taskServ.$taskList.next(updatedList);
        this.toastr.success('Task updated successfully');
        this.taskForm.reset();
        this.dialogRef.close();
      }
    })
  }

  openAddStatusPopup()
  {
  let dialogRef =   this.dialog.open(AddStatusComponent,{
      width:'350px',
      autoFocus:false,
      disableClose:true
    })

    dialogRef.afterClosed().subscribe((data:any)=>{
      this.taskForm.patchValue({
        status:data.id
      })
      })    
    
  }
}
