import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListFormComponent } from './pages/new-list-form/new-list-form.component';
import { NewTaskFormComponent } from './pages/new-task-form/new-task-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'lists', component: TaskViewComponent },
  { path: `lists/:listId`, component: TaskViewComponent },
  { path: `new-list`, component: NewListFormComponent },
  { path: `lists/:listId/new-task`, component: NewTaskFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
