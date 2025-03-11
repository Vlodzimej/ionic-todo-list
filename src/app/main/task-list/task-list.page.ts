import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks.service';
import { TaskItem } from 'src/app/models/task-item';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
  standalone: false
})
export class TaskListPage implements OnInit {

  taskList: Array<TaskItem> = []

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskService.fetchTaskList().subscribe(taskList => {
      this.taskList = taskList
    })
  }
}
