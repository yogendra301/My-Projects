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

  
  ngOnInit()
  {
    
    this.route.paramMap.subscribe((paramMap:any)=>{
    console.log(paramMap.get('id'));
      this.selectedUserId=paramMap.get('id');
    })
  }
}
