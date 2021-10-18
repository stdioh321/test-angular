import { Task } from 'src/app/models/Task';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task:Task|null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
