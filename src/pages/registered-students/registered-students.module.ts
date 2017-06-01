import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisteredStudentsPage } from './registered-students';

@NgModule({
  declarations: [
    RegisteredStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisteredStudentsPage),
  ],
  exports: [
    RegisteredStudentsPage
  ]
})
export class RegisteredStudentsPageModule {}
