// CUSTOM ####################################################################################################################
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskService } from './services/task-service';
import { TaskComponent } from './components/task/task.component';

// DEFAULT
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from './components/modals/confirm/confirm.component';
import { ErasemePipe } from './filters/eraseme.pipe';
import { BasicModalComponent } from './components/modals/basic-modal/basic-modal.component';
import { PutTaskComponent } from './components/tasks/put/put-task/put-task.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './states/task-reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskComponent,
    ConfirmComponent,
    ErasemePipe,
    BasicModalComponent,
    PutTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ taskEntries: taskReducer })

  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
