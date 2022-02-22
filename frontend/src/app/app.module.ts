import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListFormComponent } from './pages/new-list-form/new-list-form.component';
import { NewTaskFormComponent } from './pages/new-task-form/new-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListFormComponent,
    NewTaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
