import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit, AfterViewInit {
  @ViewChild("btNo") btNo!: ElementRef;
  public title: string = "Confirmation";
  public body: string = "Are you sure?";
  constructor(public activeModal: NgbActiveModal) { }

  ngAfterViewInit() {
    // console.log(this.btNo);
    this.btNo?.nativeElement?.focus();
  }

  ngOnInit(): void {


  }

}
