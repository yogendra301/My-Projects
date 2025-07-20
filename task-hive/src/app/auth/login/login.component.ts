import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:any
  constructor(private fb:FormBuilder,private authServ:AuthService,private toastr:ToastrService)
  {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(3)]]
    })
  }

  login()
  {
    if(this.loginForm.valid)
    {
      const {email,password}=this.loginForm.value;
      this.authServ.login(email,password).subscribe((result:any)=>{
        if(result && result.length>0)
        {
          localStorage.setItem('taskUsr',result[0]);
          
        }
        else{
          this.toastr.error('invalid creds, try again');
        }
      }
      ,err=>{
        console.log(err);
      }
    )
    }
  }

}
