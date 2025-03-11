import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListPage } from './task-list/task-list.page';
import { TaskCreationPage } from './task-creation/task-creation.page';

const routes: Routes = [
  {
    path: '',
    component: TaskListPage,
  },
  {
    path: 'creation',
    component: TaskCreationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
