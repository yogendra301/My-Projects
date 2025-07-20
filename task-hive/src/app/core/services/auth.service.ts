import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl='/api/users';
  constructor(private http:HttpClient) { }

  login(email:string,password:string):Observable<any>
  {
    return this.http.get(`${this.apiUrl}?email=${email}&password=${password}`);
  }

  register(userData:any):Observable<any>
  {
    return this.http.post(this.apiUrl,userData);
  }
}
