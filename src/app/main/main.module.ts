import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MainPageRoutingModule } from './main-routing.module';
import { TaskCreationPage } from './task-creation/task-creation.page';
import { TaskListPage } from './task-list/task-list.page';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    SharedModule
  ],
  declarations: [TaskListPage, TaskCreationPage]

})
export class MainPageModule {}
