import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    private router:Router
  )
  {

  }

  
ngOnInit(): void {

  console.log('🚀 Activated route snapshot:', this.route.snapshot);
  console.log('🚀 Params from snapshot:', this.route.snapshot.params);

this.route.paramMap.subscribe(params => {
  const id = params.get('id');
  this.selectedUserId = id;
});

}

}
