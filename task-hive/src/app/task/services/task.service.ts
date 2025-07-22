import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  $selectedTask = new BehaviorSubject<any>(null);
  $currentTask = this.$selectedTask.asObservable();
  constructor(private api:ApiService) { }

  searchTaskFn(value:string)
  {
    
  }
}
