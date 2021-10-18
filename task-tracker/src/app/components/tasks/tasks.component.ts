import { Task } from './../../models/Task';
import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { TASKS } from 'src/app/mock/mock-tasks';
import { environment } from 'src/environments/environment';
import { TaskService } from 'src/app/services/task-service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers:[

  ]
})

export class TasksComponent implements OnInit {
  tasks:Task[] =[];
  trash:any;
  private tasksService:TaskService;
  constructor(tasksService:TaskService) {
    this.tasksService = tasksService;
  }

  async  ngOnInit(): Promise<any> {
    try{

      this.tasks =  await this.tasksService.findAll();
    }catch(err){
      if(err instanceof HttpErrorResponse){
        console.log(err.message);
      }else{
        console.log({err});

      }

    }
    // this.tasks = TASKS;

  }

  doSomething(item:TemplateRef<ElementRef>){
    console.log(item);

  }

}
