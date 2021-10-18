

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private http:HttpClient;
  private url:string;

  constructor(http:HttpClient) {
    this.http = http;
    this.url = `${environment.baseUrl}/tasks`
   }

   async findAll():Promise<Task[]>{
    return await this.http.get(this.url).toPromise() as Promise<Task[]>;
   }

}
