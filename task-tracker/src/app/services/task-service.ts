import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable, Optional } from '@angular/core';
import { map } from 'rxjs/operators';

import { Task, Convert } from '../models/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.baseUrl}/tasks`;
  }

  async findAll(): Promise<Task[]> {
    return (await this.http.get(this.url).toPromise()) as Task[];
  }
  async findById(id: number): Promise<Task> {
    let res = (await this.http.get(`${this.url}/${id}`).toPromise());

    return res as Task;
  }
  async deleteById(id: number) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  }
  async save(task: Task) {
    return this.http.post(`${this.url}`, task).toPromise();
  }
  async update(id: number, task: Task) {
    return this.http.put(`${this.url}/${id}`, task).toPromise();
  }
}
