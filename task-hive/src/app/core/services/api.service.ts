import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl='/api';
  constructor(private http:HttpClient) { }

  getTaskList(page=1,pageSize=10)
  {
    return this.http.get(`${this.apiUrl}/tasks`);
  }

  getUserList()
  {
    return this.http.get(`${this.apiUrl}/users`);
  }


  getProjectList()
  {
    return this.http.get(`${this.apiUrl}/projects`);
  }

  addTask(value:any)
  {
    return this.http.post(`${this.apiUrl}/tasks`,value);
  }

  updateTask(value:any)
  {
    return this.http.put(`${this.apiUrl}/tasks/${value.id}`, value);
  }
}
