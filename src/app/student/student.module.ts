import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';


@NgModule({
  declarations: [StudentComponent, StudentlistComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports :[StudentComponent]
})
export class StudentModule { }
