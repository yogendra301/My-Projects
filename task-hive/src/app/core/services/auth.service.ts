import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl='/api/users';
  private loggedInUsrInfo = new BehaviorSubject<any>(null);
  $currentUser = this.loggedInUsrInfo.asObservable();
  constructor(private http:HttpClient,private router:Router) { }

  login(email:string,password:string):Observable<any>
  {
    return this.http.get(`${this.apiUrl}?email=${email}&password=${password}`);
  }

  register(userData:any):Observable<any>
  {
    return this.http.post(this.apiUrl,userData);
  }

  getUserRole()
  {
    const user = JSON.parse(localStorage.getItem('taskUsr')||'');
    return user?user.role:'';
  }

  setAuthFromStorage()
  {
     const user = JSON.parse(localStorage.getItem('taskUsr')||'');
     if(user)
     {
       this.loggedInUsrInfo.next(user);
     }
  }

  logout()
  {
    localStorage.removeItem('taskUsr');
    this.loggedInUsrInfo.next(null);
    this.router.navigate(['/login']);
  }
}
