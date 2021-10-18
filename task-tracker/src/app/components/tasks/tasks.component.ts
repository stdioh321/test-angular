import { ErasemePipe } from './../../filters/eraseme.pipe';
import { Task, Convert } from './../../models/Task';
import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import faker from 'faker';

import { TASKS } from 'src/app/mock/mock-tasks';
import { environment } from 'src/environments/environment';
import { TaskService } from 'src/app/services/task-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from '../modals/confirm/confirm.component';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [

  ]
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  trash: any;


  constructor(private tasksService: TaskService, private modalService: NgbModal) {
  }

  async ngOnInit(): Promise<any> {
    try {
      this.tasks = await this.tasksService.findAll();
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        console.log({ err });
      } else {
        console.log({ err });

      }

    }
    // this.tasks = TASKS;

  }

  async onTaskDelete(task: Task) {
    let modalRef = this.modalService.open(ConfirmComponent);

    (modalRef.componentInstance as ConfirmComponent).body = `Really delete: <span class="font-weight-bolder text-danger">${task.text}</span>?`;

    let proceed = await modalRef.closed.toPromise();
    if (!proceed) return;


    try {
      const id: number = task.id as number;
      await this.tasksService.deleteById(id);
      this.tasks = this.tasks.filter(task => task.id != id);
    } catch (error) {
      console.log({ error });

      // }
    }
  }

}
