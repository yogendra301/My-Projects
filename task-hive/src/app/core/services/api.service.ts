import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl='/api'
  constructor(private http:HttpClient) { }

getTaskList()
{

  return this.http.get(`${this.apiUrl}/tasks`);
}

getUserList()
{
return this.http.get(`${this.apiUrl}/users`);
}


}
