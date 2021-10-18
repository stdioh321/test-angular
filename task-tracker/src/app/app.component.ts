import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'task-tracker';
  public msg:number = 1;

  ngOnInit(){

  }

  doSomething(ctrl:NgModel){
    const {model} = ctrl;
    console.log(model);
  }
}
