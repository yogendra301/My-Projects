import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { task } from 'src/app/shared/models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getTaskList(page = 1, pageSize = 10): Observable<task[]> {
    return this.http.get<task[]>(`${this.apiUrl}tasks`);
  }

  getUserList() {
    return this.http.get(`${this.apiUrl}users`);
  }


  getProjectList() {
    return this.http.get(`${this.apiUrl}projects`);
  }

addTask(value: any): Observable<task> {
    // Remove id from value as json-server will auto-generate it
    const { id, ...taskData } = value;
    return this.http.post<task>(`${this.apiUrl}tasks`, taskData);
  }

  updateTask(value: any): Observable<task> {
    return this.http.put<task>(`${this.apiUrl}tasks/${value.id}`, value);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}tasks/${id}`);
  }

  addStatus(status: any): Observable<any> {
    // Remove id from status as json-server will auto-generate it
    const { id, ...statusData } = status;
    return this.http.post(`${this.apiUrl}status`, statusData);
  }

  getStatuses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}status`);
  }

}
