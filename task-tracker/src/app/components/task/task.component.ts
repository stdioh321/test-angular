import { Task } from 'src/app/models/Task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as fa from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteClick = new EventEmitter<Task>();
  @Output() editClick = new EventEmitter<Task>();
  fa = fa;
  constructor() { }

  ngOnInit(): void {
  }
  clickDelete(task: Task) {
    this.deleteClick.emit(task);
  }
  clickEdit(task: Task) {
    this.editClick.emit(task);
  }
}
