import { TASKS } from 'src/app/mock/mock-tasks';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks:Task[] =[];
  constructor() { }

  ngOnInit(): void {
    this.tasks = TASKS;
  }

}
