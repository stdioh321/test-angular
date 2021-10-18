import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from './components/modals/confirm/confirm.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'task-tracker';


  constructor() {}



  ngOnInit(){

  }

}
