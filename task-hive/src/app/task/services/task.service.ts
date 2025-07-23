import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskStatus:any=[
    "Not Started",
    "In Progress",
    "Pending",
    "Completed"
  ]
  $selectedTask = new BehaviorSubject<any>(null);
  $currentTask = this.$selectedTask.asObservable();

  $taskList = new BehaviorSubject<any>(null);
  $myTaskList = this.$taskList.asObservable();

  $isAddOrEdit = new BehaviorSubject<any>(null);


  constructor(private api:ApiService) { }

}
