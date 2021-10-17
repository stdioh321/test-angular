import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text:string = "";
  @Input() color:string= "";
  @Output() btnClick = new EventEmitter<boolean>();

  disabled:boolean =false;

  constructor() {


   }

  ngOnInit(): void {
    // if(!this.color) this.color;

  }

  onClick(){

    this.btnClick.emit(this.disabled);
  }
}
