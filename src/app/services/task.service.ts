import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl : string = "http://localhost:5000/tasks"
  constructor(private client: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.client.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task) : Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.client.delete<Task>(url);
  } 
}
