import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent implements OnInit {

  listId: string;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.route.params.subscribe((params: Params) => this.listId = params['listId']); }

  ngOnInit(): void {
  }

  addTask(value: string) {
    this.taskService.createTask(this.listId, value).subscribe(() => this.router.navigate(['../'], { relativeTo: this.route }))
  }
}
