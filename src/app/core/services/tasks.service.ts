import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskItem } from 'src/app/models/task-item';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  fetchTaskList(): Observable<TaskItem[]> {
    const result: Array<TaskItem> = []
    
    for (let i=1;i<20;i++) {
      const taskItem = {
        id: i, 
        title: `Test title ${i}`, 
        todo: `Test todo ${i}`,
        completed: false,
        userId: 0,
        date: "01/01/2025"
      }
      result.push(taskItem)
    }

    return new BehaviorSubject(result)
  }
}
