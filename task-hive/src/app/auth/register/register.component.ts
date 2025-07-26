import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:any

  constructor(private fb:FormBuilder,private authServ:AuthService,private toastr:ToastrService,private router:Router)
  {
    this.registerForm=this.fb.group({
      fullName:['',Validators.required],
      email:['',Validators.email],
      role:['dev'],
      password:['',[Validators.required,Validators.minLength(3)]],
      confirmPassword:['',Validators.required],
    },
  {validators:this.matchPassword
  })
  this.registerForm.get('password')?.valueChanges.subscribe(() => {
  this.registerForm.updateValueAndValidity();
});

this.registerForm.get('confirmPassword')?.valueChanges.subscribe(() => {
  this.registerForm.updateValueAndValidity();
});
  }

  ngOnInit()
  {


  }
matchPassword(group: FormGroup): ValidationErrors | null {
  const pass = group.get('password')?.value;
  const cpass = group.get('confirmPassword')?.value;

  return pass === cpass ? null : { passMissmatch: true };
}

  register()
  {
    this.registerForm.markAllAsTouched();
    if (!this.registerForm.valid) {
      this.toastr.error('Please fill all required fields correctly');
      return;
    }
      this.authServ.register(this.registerForm.value).subscribe((result:any)=>{
        if(result)
        {
         this.toastr.success('registered successfully');
          this.router.navigate(['/login']);
        }
        
      }
      ,(err:any)=>{
        console.log(err);
      }
    )
    }

}
