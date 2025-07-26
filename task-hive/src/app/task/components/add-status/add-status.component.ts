import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.scss']
})
export class AddStatusComponent {

  statusFormObj:any={
    title:'',
    color:''
  }
  constructor( private api:ApiService,
    private toastr:ToastrService,
    private dialogRef:MatDialogRef<AddStatusComponent>
  )
  {

  }

  addStatus(statusForm:NgForm)
  {
    if(statusForm.invalid)
    {
      Object.values(statusForm.controls).forEach((res:any)=>{
        res.markAsTouched();
      })
      return;
    }

    this.api.addStatus(statusForm.value).subscribe((res)=>{
      if(res)
      {
        this.toastr.success('Status added successfully');
        statusForm.reset();
        this.dialogRef.close(res);
      }
    },(err)=>{
      this.toastr.error('Failed to add status');
      console.error('Error adding status:', err);
    })
  }
}
