import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl='/api/users';
  public loggedInUsrInfo = new BehaviorSubject<any>(null);
  $currentUser = this.loggedInUsrInfo.asObservable();
  constructor(private http:HttpClient,private router:Router) { }

  login(username:string,password:string):Observable<any>
  {
    return this.http.get(`${this.apiUrl}?username=${username}&password=${password}`);
  }

  register(userData:any):Observable<any>
  {
    return this.http.post(this.apiUrl,userData);
  }

  getUserRole(): string {
    try {
      const user = JSON.parse(localStorage.getItem('taskUsr') || 'null');
      return user && user.role ? user.role : '';
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      return '';
    }
  }

  setAuthFromStorage(): void {
    try {
      const user = JSON.parse(localStorage.getItem('taskUsr') || 'null');
      if (user) {
        this.loggedInUsrInfo.next(user);
      }
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      this.loggedInUsrInfo.next(null);
    }
  }

  isAuthenticated(): boolean {
    try {
      const user = JSON.parse(localStorage.getItem('taskUsr') || 'null');
      return !!user;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      return false;
    }
  }

  logout()
  {
    localStorage.removeItem('taskUsr');
    this.loggedInUsrInfo.next(null);
    this.router.navigate(['/login']);
  }
}
