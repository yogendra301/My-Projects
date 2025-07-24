import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any
  constructor(private fb:FormBuilder,private authServ:AuthService,private toastr:ToastrService,private router:Router)
  {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(3)]]
    })
  }

  ngOnInit()
  {
     const chkUsr = JSON.parse(localStorage.getItem('taskUsr')||'null')
     if(chkUsr!=null)
     {
       if(chkUsr.role=='admin')
         this.router.navigate(['/admin']);
       else
         this.router.navigate(['/developer']);
     }
  }

  login()
  {
    if(this.loginForm.valid)
    {
      const {email,password}=this.loginForm.value;
      this.authServ.login(email,password).subscribe((result:any)=>{
        if(result && result.length>0)
        {
          localStorage.setItem('taskUsr',JSON.stringify(result[0]));
          this.authServ.loggedInUsrInfo.next(result[0]);
          if(result[0].role=='admin')
          {
            this.router.navigate(['/admin']);
          }
          else{
          this.router.navigate(['/developer']);

          }
          
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
