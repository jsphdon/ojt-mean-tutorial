import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
// import List from 'src/app/models/list';

@Component({
  selector: 'app-new-list-form',
  templateUrl: './new-list-form.component.html',
  styleUrls: ['./new-list-form.component.scss']
})
export class NewListFormComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() { }

  // ADD LIST
  // addList(value: string) {
  //   this.taskService.createList(value)
  //     .subscribe((list: List) => this.router.navigate(['/lists', list._id]));
  // }
}
