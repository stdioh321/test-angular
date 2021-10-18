import { PutTaskComponent } from './../tasks/put/put-task/put-task.component';
import { BasicModalComponent } from './../modals/basic-modal/basic-modal.component';
import { NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from '../button/button.component';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "Task tracker";
  constructor(private ngbModal: NgbModal) { }

  ngOnInit(): void {
  }
  async openCreateTaskModal(txt: any) {
    let modalRef = this.ngbModal.open(PutTaskComponent);
    // (modalRef.componentInstance as PutTaskComponent).addTask.subscribe(this.onAddTask)
    // (modalRef.componentInstance as BasicModalComponent)
    try {
      let result: undefined | Task = await modalRef.closed.toPromise();
      if (result)
        console.log(result);


    } catch (error) {
      console.log({ error });

    }

  }
  onAddTask(task: Task) {
    console.log(task);

  }
}
