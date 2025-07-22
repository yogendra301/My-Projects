import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  $selectedTask = new BehaviorSubject<any>(null);
  $currentTask = this.$selectedTask.asObservable();
  constructor() { }
}
