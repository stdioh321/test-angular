import { add, addAll, remove } from './../../states/task-actions';
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
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [

  ]
})

export class TasksComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(
    private tasksService: TaskService,
    private modalService: NgbModal,
    private storeTasks: Store<{ taskEntries: Task[] }>) {
    this.tasks$ = storeTasks.select("taskEntries");
  }


  async ngOnInit(): Promise<any> {
    try {
      this.storeTasks.dispatch(addAll({ tasks: await this.tasksService.findAll() }));
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
      this.storeTasks.dispatch(remove({ taskId: id }));
    } catch (error) {
      console.log({ error });
    }
  }

}
