import { TaskService } from 'src/app/services/task-service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/models/Task';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { add, update } from 'src/app/states/task-actions';

@Component({
  selector: 'app-put-task',
  templateUrl: './put-task.component.html',
  styleUrls: ['./put-task.component.scss']
})
export class PutTaskComponent implements OnInit {
  @Output() addTask = new EventEmitter<Task>();
  @Input() task: null | Task = null;
  // @ViewChild("myForm") myForm!: NgForm;
  // user = {
  //   firstName: null,
  //   password: null,
  // };

  form!: FormGroup;

  get text() { return this.form.get("text") };
  get reminder() { return this.form.get("reminder") };
  constructor(private activeModal: NgbActiveModal, private taskService: TaskService,
    private storeTask: Store<Task>
  ) { }

  ngOnInit(): void {
    console.log(this.task);

    this.form = new FormGroup({
      "text": new FormControl(this.task?.text || "", Validators.required),
      "reminder": new FormControl(this.task?.reminder === false ? false : true, Validators.required),
    });
  }


  async onSubmit() {
    this.form.markAsDirty();
    if (this.form.valid) {
      let tempFormData = this.form.value;
      if (!this.task) {
        tempFormData["day"] = new Date().getTime();
        let data = new Task(tempFormData);
        try {
          let taskAdded = await this.taskService.save(data) as Task;
          this.storeTask.dispatch(add(taskAdded));
          this.activeModal.close(taskAdded);
        } catch (error) {
          console.log({ error });
        }
      } else {
        let tempFormData = this.form.value;
        tempFormData["day"] = this.task.day;
        let data = new Task(tempFormData);
        try {
          let updatedTaks = await this.taskService.update(this.task?.id as number, data) as Task;
          this.storeTask.dispatch(update(updatedTaks));
          this.activeModal.close(true);
        } catch (error) {
          console.log({ error });
        }
      }

      // this.activeModal.close(true);
    }
  }
  // ngAfterViewInit() {

  //   console.log(this.myForm?.controls)

  // }

  // onSubmitTemplateBased() {
  //   console.log(this.myForm.controls);

  // }
}
