import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutTaskComponent } from './put-task.component';

describe('PutTaskComponent', () => {
  let component: PutTaskComponent;
  let fixture: ComponentFixture<PutTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
